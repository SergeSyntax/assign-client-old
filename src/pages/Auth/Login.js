import React from 'react';
import LoginHeader from 'components/Auth/Login/LoginHeader/LoginHeader';
import LoginOptions from 'components/Auth/Login/LoginOptions/LoginOptions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  loginPage: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
});

const Login = () => {
  const classes = useStyles();

  return (
    <div className={classes.loginPage}>
      <LoginHeader />
      <LoginOptions />
    </div>
  );
};

export default Login;
