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

export default function HighlightedCard3_hos() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // 添加状态
  const [open, setOpen] = useState(false);
  const [beneId, setBeneId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  // 处理打开和关闭对话框
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setBeneId('');
    setResult(null);
    setError(null);
    setLoading(false); // Reset loading state
  };

  // 处理表单提交
  const handleSubmit = async () => {
    setLoading(true); // Start loading
    try {
      const response = await fetch('http://localhost:3001/api/predict_hos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ beneId }),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      setResult(data);
      setError(null);
    } catch (err) {
      setError(err.message || '预测失败');
      setResult(null);
    } finally {
      setLoading(false); // Stop loading
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
          患者未来健康状况预测
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          点击按钮后，我们将根据您输入的患者ID，进行患者未来健康状况预测。
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleClickOpen} // 添加点击事件
        >
          预测
        </Button>

        <Dialog open={open} onClose={handleClose}  fullWidth   maxWidth={false} PaperProps={{style: {width: '400px',},}}>
          <DialogTitle>输入患者ID进行预测</DialogTitle>
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
                <Typography variant="h6">未来健康状况预测：{result.statment}（{Number(result.prediction).toFixed(2)}）</Typography>
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
