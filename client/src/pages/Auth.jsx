import React, { useContext, useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, PROJECTS_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';
import { Context } from '../index';
import { Box, Button, TextField, Typography, Avatar, CssBaseline, Container, Grid, Link, Checkbox, FormControlLabel  } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Auth = observer( () => {
    const {user} = useContext(Context)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate();
    

   
    const click = async () => {
        try {
            let userData;
            
            if (isLogin) {
                userData = await login(email, password);
            } else {
                userData = await registration(email, password);
            }
            user.setUser(user);
            user.setIsAuth(true);
            navigate(PROJECTS_ROUTE);
        } catch (e) {
            alert(e)
        }
    };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            { isLogin? 'Авторизация' : 'Регистрация'}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Запомнить пароль"
            />
            <Button
              
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
              onClick={click}
            >
              { isLogin? 'Войти' : 'Регистрация'}
            </Button>
            <Grid container>
              <Grid item xs>
                <NavLink to={'/'} >                    
                  Забыли пароль?
                </NavLink>
              </Grid>
              <Grid item>
                { isLogin?
                    <NavLink to={REGISTRATION_ROUTE}>
                        Регистрация!
                    </NavLink>
                    :
                    <NavLink to={LOGIN_ROUTE}  >
                        Есть акаунт? Войти.
                    </NavLink>
                }
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
});


export default Auth