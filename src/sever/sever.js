const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001; // 后端服务的端口
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.post('/api/start-training', (req, res) => {
  // 定义需要执行的命令
//   const cmd = `
//     docker exec standalone_fate powershell -Command "
//     cd /data/projects/fate/examples/pipeline/hetero_nn/
//     python /data/projects/fate/examples/pipeline/hetero_nn/test_nn_fedpass.py
//     "
//   `;
// const cmd = `
// docker exec standalone_fate sh -c "echo Hello World"
// `;
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
