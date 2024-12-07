const express = require('express');
const { exec } = require('child_process');
const OpenAI = require('openai');
const openai = new OpenAI({
  apiKey: 'sk-jX4tq0Vd4kfi7GoDBFcDY4ufIzRhzhaAnMYifwnbMQnygb2w', // 使用环境变量管理API密钥
  baseURL: 'https://api.feidaapi.com/v1',
});

require('dotenv').config(); // 加载环境变量
const app = express();
const port = 3001; // 后端服务的端口
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/api/predict', (req, res) => {
  const { beneId } = req.body;

  if (!beneId) {
    return res.status(400).json({ message: '缺少 beneId' });
  }

  // 构建命令
  const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/load_model.py --bene_id ${beneId}"`;

  // 执行命令
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('执行命令出错:', error);
      res.status(500).json({ message: '预测失败', error: error.message });
      return;
    }
    console.log('标准输出:', stdout);
    console.error('标准错误:', stderr);

    // 解析输出，提取所需信息
    const lines = stdout.split('\n');
    const pricing = lines[0] || '';
    const fraudRisk = lines[1] || '';
    const f_health = lines[2] || '';
    if(f_health!="NAN")
    {
      const future_health = parseFloat(f_health)-0.5;
      let statment;

      if (future_health > 0) {
        statment = "稳定恢复" ;
      } else {
        statment = "存在恶化风险";
      }
      res.json({pricing, fraudRisk,future_health , statment})
    }
    else
    {
      res.json({ pricing, fraudRisk });
    }
  });
});


// app.post('/api/start-training', (req, res) => {

// const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/test_nn_fedpass.py"`;
//   // 执行命令
//   exec(cmd, (error, stdout, stderr) => {
//     if (error) {
//       console.error('执行命令出错:', error);
//       res.status(500).json({ message: '训练失败', error: error.message });
//       return;
//     }
//     console.log('标准输出:', stdout);
//     console.error('标准错误:', stderr);
//     res.json({ message: '训练成功', output: stdout });
//   });
// });

app.post('/api/start-training', (req, res) => {
  const cmd1 = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/test_nn_fedpass.py"`;
  const cmd2 = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/test_nn_fedpass_sig.py"`;

  const executeCommand = (cmd) => {
    return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error('执行命令出错:', error);
          reject({ message: '训练失败', error: error.message });
        } else {
          console.log('标准输出:', stdout);
          console.error('标准错误:', stderr);
          resolve(stdout);
        }
      });
    });
  };

  Promise.all([executeCommand(cmd1), executeCommand(cmd2)])
    .then((outputs) => {
      res.json({ message: '训练成功', outputs });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});


app.post('/api/predict_hos', (req, res) => {
  const { beneId } = req.body;

  if (!beneId) {
    return res.status(400).json({ message: '缺少 beneId' });
  }

  // 构建命令
  const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/homo_nn/ && python /data/projects/fate/examples/pipeline/homo_nn/load_model.py --bene_id ${beneId}"`;

  // 执行命令
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('执行命令出错:', error);
      res.status(500).json({ message: '预测失败', error: error.message });
      return;
    }
    console.log('标准输出:', stdout);
    console.error('标准错误:', stderr);

    // 解析输出，提取所需信息
    const prediction = stdout - 0.5;
    let statment;

    if (prediction > 0) {
      statment = "稳定恢复" ;
    } else {
      statment = "存在恶化风险";
    }
    
    res.json({ statment,prediction });
    
  });
});


app.post('/api/start-training_hos', (req, res) => {

const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/homo_nn/ && python /data/projects/fate/examples/pipeline/homo_nn/test_nn_homo.py"`;
  // 执行命令
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error('执行命令出错:', error);
      res.status(500).json({ message: '训练失败', error: error.message });
      return;
    }
    console.log('标准输出:', stdout);
    console.error('标准错误:', stderr);
    res.json({ message: '训练成功', output: stdout });
  });
});

app.listen(port, () => {
  console.log(`后端服务已启动，监听端口 ${port}`);
});


app.post('/api/renewal-analysis', (req, res) => {
  const { beneId,result } = req.body; // 从请求中获取 beneId

  if (!beneId) {
    return res.status(400).json({ message: '缺少 beneId' });
  }

  // 构建执行 readcsv.py 的命令
  const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && python /data/projects/fate/examples/pipeline/hetero_nn/readcsv.py --bene_id ${beneId}"`;

  // 执行命令
  exec(cmd, async (error, stdout, stderr) => {
    if (error) {
      console.error('执行命令出错:', error);
      res.status(500).json({ message: '获取信息失败', error: error.message });
      return;
    }
    console.log('标准输出:', stdout);
    console.error('标准错误:', stderr);

    // 解析 readcsv.py 的输出
    const lines = stdout.trim().split('\n');
    if (lines.length < 8) {
      res.status(500).json({ message: '获取的信息不完整' });
      return;
    }

    // 提取信息
    const age = lines[0];
    const genderCode = lines[1];
    const gender = genderCode === '1' ? '男' : '女';
    const ipReimbursement = parseFloat(lines[2]);
    const opReimbursement = parseFloat(lines[3]);
    const insurancePrice = parseFloat(lines[4]);
    const potentialFraudScore = parseFloat(lines[5]);
    const previousDiseases = lines[6] ? lines[6].split(',') : [];
    const hospitalVisits = parseInt(lines[7], 10);

    // 构建用于 Prompt 的数据
    const clientInfo = {
      age: age || '未知',
      gender: gender || '未知',
      policyType: '医疗健康险',
      currentPremium: result.pricing || '未知',
    };

    const claimHistory = {
      totalClaimAmount: ipReimbursement + opReimbursement || 0,
      claimReasons: '住院/门诊报销', // 可根据实际情况调整
    };

    const medicalData = {
      previousDiseases: previousDiseases || [],
      currentHealthStatus: '未知', // 如果有更多数据，可在此添加
      recentMedicalResults: `过去的医院就诊次数: ${hospitalVisits}`,
    };

    const fraudRisk = {
      hasAbnormalClaims: result.fraudRisk > 0.5, // 例如，超过0.5认为有风险
      hasFraudSuspicion: result.fraudRisk > 0.5, // 根据业务逻辑填写
    };

    // 根据疾病信息和业务逻辑设置疾病进展预测
    const diseaseProgress = {
      currentDiagnosis: previousDiseases.length > 0 ? previousDiseases[0] : '未知',
      expectedProgress: result.statment, // 可根据需求添加预测逻辑
    };

    // 生成 Prompt
    const prompt = `
### Prompt: 保险续保评估

**背景：**
您是一款智能助理模型，负责为保险公司提供续保评估服务。您的任务是基于客户的保险信息、历史理赔记录、潜在的骗保风险，以及医院的疾病进展预测，给出续保建议和定价调整方案。

**输入：**
1. **客户基本信息：**
   - 年龄: ${clientInfo.age}
   - 性别: ${clientInfo.gender}
   - 保单类型: ${clientInfo.policyType}
   - 当前保费: ${clientInfo.currentPremium}

2. **历史理赔记录：**
   - 理赔金额: ${claimHistory.totalClaimAmount}
   - 理赔原因: ${claimHistory.claimReasons}

3. **医疗记录与健康状况：**
   - 既往疾病史: ${medicalData.previousDiseases.join(", ")}
   - 当前健康状况: ${medicalData.currentHealthStatus}
   - 最近医疗检查结果: ${medicalData.recentMedicalResults}

4. **骗保风险评估因素：**
   - 是否有异常理赔记录: ${fraudRisk.hasAbnormalClaims}
   - 有无过往骗保嫌疑: ${fraudRisk.hasFraudSuspicion}

5. **医院的疾病进展预测：**
   - 当前疾病诊断: ${diseaseProgress.currentDiagnosis}
   - 疾病预计发展趋势: ${diseaseProgress.expectedProgress}

**输出：(请以纯文本输出，不要使用markdown格式)**

1. 续保建议：
   (1) 是否提供续保资格：//您的判断
   (2) 定价调整建议：//您的调整
   (3) 理由说明：//您的理由

2. 风险与建议：
   (1) 识别的主要风险因素：//识别的风险
   (2) 风险管理建议：//建议的管理策略
`;

    // 调用 OpenAI API
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 512,
        temperature: 0.7,
      });

      const analysis = chatCompletion.choices[0].message.content;

      res.json({ analysis });
    } catch (error) {
      console.error("OpenAI API 调用出错:", error);
      res.status(500).json({ error: '续保分析失败' });
    }
  });
});