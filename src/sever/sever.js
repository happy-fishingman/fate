const express = require('express');
const { exec } = require('child_process');
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
  const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/load_model.py ${beneId}"`;

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
    const pricing = stdout;
    const fraudRisk = '0.04%';

    res.json({ pricing, fraudRisk });
  });
});


app.post('/api/start-training', (req, res) => {

const cmd = `docker exec standalone_fate sh -c "source /data/projects/fate/bin/init_env.sh && cd /data/projects/fate/examples/pipeline/hetero_nn/ && python /data/projects/fate/examples/pipeline/hetero_nn/test_nn_fedpass.py"`;
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
