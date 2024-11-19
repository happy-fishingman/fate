import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import HandymanIcon from '@mui/icons-material/Handyman';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import CircularProgress from '@mui/material/CircularProgress';

export default function HighlightedCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  // 管理弹窗的打开状态
  const [open, setOpen] = React.useState(false);

  // 管理训练的加载状态
  const [loading, setLoading] = React.useState(false);

  // 点击“训练”按钮的处理函数
  const handleTrainClick = () => {
    setOpen(true);
  };

  // 点击弹窗中的“确认”按钮
  const handleConfirm = () => {
    setLoading(true);
    setOpen(false);

    // 调用后端的 API 接口
    fetch('http://localhost:3001/api/start-training', { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setLoading(false);
        // 在这里处理后端返回的数据，例如显示训练结果
        alert('训练完成！');
      })
      .catch(error => {
        setLoading(false);
        console.error('Error:', error);
        alert('训练失败，请检查后台日志。');
        alert(error);
      });
  };

  // 点击弹窗中的“取消”按钮
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <HandymanIcon />
        <Typography
          component="h2"
          variant="subtitle2"
          gutterBottom
          sx={{ fontWeight: '600' }}
        >
          模型训练
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: '8px' }}>
          点击按钮后，我们将根据您上传的训练数据和医院提供的就诊信息，开始模型训练。
        </Typography>
        <Button
          variant="contained"
          size="small"
          color="primary"
          endIcon={<ChevronRightRoundedIcon />}
          fullWidth={isSmallScreen}
          onClick={handleTrainClick}
        >
          训练
        </Button>

        {/* 弹窗 */}
        <Dialog
          open={open}
          onClose={handleCancel}
        >
          <DialogTitle>开始训练</DialogTitle>
          <DialogContent>
            <DialogContentText>
              确定要开始模型训练吗？这可能需要一些时间。
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCancel}>取消</Button>
            <Button onClick={handleConfirm} autoFocus>
              确认
            </Button>
          </DialogActions>
        </Dialog>

        {/* 训练进行中的加载指示器 */}
        {loading && (
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <CircularProgress />
            <Typography variant="body2" sx={{ mt: 1 }}>
              模型训练中，请稍候...
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
