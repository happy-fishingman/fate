import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { Link, useNavigate } from 'react-router-dom';
import { Link as MuiLink } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog'; 
import DialogTitle from '@mui/material/DialogTitle'; 
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { styled } from '@mui/material/styles';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [identity, setIdentity] = React.useState('');
  const [identityError, setIdentityError] = React.useState(false);
  const [identityErrorMessage, setIdentityErrorMessage] = React.useState('');

  const [successDialogOpen, setSuccessDialogOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleSuccessDialogClose = () => {
    setSuccessDialogOpen(false);
  };

  const handleSuccessDialogConfirm = () => {
    setSuccessDialogOpen(false);
    if (identity === 'company') {
      navigate('/dashboard'); // 如果选择了公司，跳转到 /dashboard
    } else if (identity === 'hospital') {
      navigate('/hospitalboard'); // 如果选择了医院，跳转到 /hospitalboard
    }
  };

  const handleIdentityChange = (event) => {
    setIdentity(event.target.value);
    setIdentityError(false);
    setIdentityErrorMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateInputs();

    if (!isValid) {
      return;
    }

    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      identity: data.get('identity'),
    });

    // 显示登录成功的弹窗
    setSuccessDialogOpen(true);
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage('请输入有效的邮箱地址。');
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('密码长度最少为6位。');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    if (!identity) {
      setIdentityError(true);
      setIdentityErrorMessage('请选择登录身份。');
      isValid = false;
    } else {
      setIdentityError(false);
      setIdentityErrorMessage('');
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* 这里可以添加您的Logo或其他元素 */}
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        登录
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        <FormControl component="fieldset" error={identityError}>
          <RadioGroup
            aria-label="identity"
            name="identity"
            value={identity}
            onChange={handleIdentityChange}
            row
          >
            <FormControlLabel value="hospital" control={<Radio />} label="医院" />
            <FormControlLabel value="company" control={<Radio />} label="公司" />
          </RadioGroup>
          {identityError && (
            <FormHelperText>{identityErrorMessage}</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">邮箱</FormLabel>
          <TextField
            error={emailError}
            helperText={emailErrorMessage}
            id="email"
            type="email"
            name="email"
            placeholder="your@email.com"
            autoComplete="email"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={emailError ? 'error' : 'primary'}
            sx={{ ariaLabel: 'email' }}
          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">密码</FormLabel>
          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="记住我"
        />
        <Button type="submit" fullWidth variant="contained">
          登录
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          还未拥有账号?{' '}
          <span>
            <MuiLink
              to="/signup"
              component={Link}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              注册
            </MuiLink>
          </span>
        </Typography>
      </Box>
      {/* 添加登录成功的弹窗 */}
      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">登录成功</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            即将自动跳转到主界面。
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSuccessDialogConfirm} autoFocus>
            确认
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
