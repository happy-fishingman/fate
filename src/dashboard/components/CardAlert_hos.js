import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import { Link, useNavigate } from 'react-router-dom';


export default function CardAlert_hos() {
  const navigate = useNavigate();

  const handleSuccessDialogConfirm = () => {
    navigate('/dashboard'); 
  };
  
  return (
    <Card variant="outlined" sx={{ m: 1.5, p: 1.5 }}>
      <CardContent>
        <AutoAwesomeRoundedIcon fontSize="small" />
        <Typography gutterBottom sx={{ fontWeight: 600 }}>
          公司视角体验
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
          以游客身份体验本系统在公司的应用。
        </Typography>
        <Button onClick={handleSuccessDialogConfirm} variant="contained" size="small" fullWidth>
          体验
        </Button>
      </CardContent>
    </Card>
  );
}
