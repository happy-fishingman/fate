import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import SpeedIcon from '@mui/icons-material/Speed';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';

export default function HighlightedCard3() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // 状态管理
  const [open, setOpen] = useState(false);
  const [beneId, setBeneId] = useState('');
  const [result, setResult] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null); // 新增状态，用于存储续保分析结果
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // 预测加载状态
  const [analysisLoading, setAnalysisLoading] = useState(false); // 分析加载状态
  

  // 打开和关闭对话框
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBeneId('');
    setResult(null);
    setAnalysisResult(null);
    setError(null);
    setLoading(false);
    setAnalysisLoading(false);
  };

  // 处理预测提交
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/predict', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ beneId }),
      });

      if (!response.ok) {
        throw new Error('网络响应不正确');
      }

      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message || '预测失败');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  // 处理续保分析
  const handleAnalysis = async () => {
    setAnalysisLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/renewal-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ beneId,result }), // 将预测结果发送到后端
      });

      if (!response.ok) {
        throw new Error('网络响应不正确');
      }

      const data = await response.json();
      setAnalysisResult(data.analysis);
      setError(null);
    } catch (err) {
      setError(err.message || '续保分析失败');
      setAnalysisResult(null);
    } finally {
      setAnalysisLoading(false);
    }
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <SpeedIcon />
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          保险定价预测
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          点击按钮后，我们将根据您输入的用户ID，进行保险价格预测。
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleClickOpen}
        >
          预测
        </Button>

        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>输入用户ID进行预测</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Bene ID"
              type="text"
              variant="standard"
              value={beneId}
              fullWidth
              required
              onChange={(e) => setBeneId(e.target.value)}
            />

            {loading && <CircularProgress />}
            {error && <Alert severity="error">{error}</Alert>}
            {result && (
              <div>
                <Typography variant="h6">医疗保险定价：{Number(result.pricing).toFixed(2)}</Typography>
                <Typography variant="h6">潜在骗保风险：{Number(result.fraudRisk).toFixed(2)}</Typography>
                <Typography variant="h6">未来健康状况预测：{result.statment}（{Number(result.future_health).toFixed(2)}）</Typography>
                {/* 新增续保分析按钮 */}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleAnalysis}
                  disabled={analysisLoading}
                  sx={{ mt: 2 }}
                >
                  续保分析
                </Button>

                {/* 显示续保分析结果 */}
                {analysisLoading && <CircularProgress />}
                {analysisResult && (
                  <Typography variant="body1" sx={{ mt: 2, whiteSpace: 'pre-line' }}>
                    {analysisResult}
                  </Typography>
                )}
              </div>
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>取消</Button>
            <Button onClick={handleSubmit} disabled={loading}>预测</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
}
