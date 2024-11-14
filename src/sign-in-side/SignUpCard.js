import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
// import Divider from '@mui/material/Divider';
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

// import ForgotPassword from './ForgotPassword';
// import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';

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
  const [repasswordError, setrePasswordError] = React.useState(false);
  const [repasswordErrorMessage, setrePasswordErrorMessage] = React.useState('');
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
    navigate('/fateboard'); // 跳转到指定路由
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

    setSuccessDialogOpen(true);
  };

  const validateInputs = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const repassword = document.getElementById('repassword');

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

    if (password.value !== repassword.value) {
      setrePasswordError(true);
      setrePasswordErrorMessage('密码不匹配。');
      isValid = false;
    } else {
      setrePasswordError(false);
      setrePasswordErrorMessage('');
    }

    return isValid;
  };

  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        {/* <SitemarkIcon /> */}
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        注册
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
            {/* <Link
              component="button"
              type="button"
              onClick={handleClickOpen}
              variant="body2"
              sx={{ alignSelf: 'baseline' }}
            >
              Forgot your password?
            </Link> */}
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
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="repassword">确认密码</FormLabel>
          </Box>
          <TextField
            error={repasswordError}
            helperText={repasswordErrorMessage}
            name="repassword"
            placeholder="••••••"
            type="password"
            id="repassword"
            autoComplete="current-repassword"
            required
            fullWidth
            variant="outlined"
            color={repasswordError ? 'error' : 'primary'}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="记住我"
        />
        <Button type="submit" fullWidth variant="contained">
          注册
        </Button>
        <Typography sx={{ textAlign: 'center' }}>
          已拥有账号?{' '}
          <span>
            <MuiLink
              to="/"
              component={Link}
              variant="body2"
              sx={{ alignSelf: 'center' }}
            >
              登录
            </MuiLink>
          </span>
        </Typography>
      </Box>
      <Dialog
        open={successDialogOpen}
        onClose={handleSuccessDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">注册成功</DialogTitle>
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
