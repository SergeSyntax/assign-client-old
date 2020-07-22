import React from 'react';
import RegisterHeader from 'components/Auth/Register/RegisterHeader/RegisterHeader';
import RegisterFooter from 'components/Auth/Register/RegisterFooter/RegisterFooter';
import { RegisterOptions } from 'components/Auth/Register/RegisterOptions/RegisterOptions';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  registerPage: {
    color: '#4a5568',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(-225deg, #473b7b 0%, #3584a7 70%, #30d2be 100%)',
    minHeight: '100vh',
  },
});

const Register = () => {
  const classes = useStyles();
  return (
    <div className={classes.registerPage}>
      <RegisterHeader />
      <RegisterOptions />
      <RegisterFooter />
    </div>
  );
};

export default Register;
