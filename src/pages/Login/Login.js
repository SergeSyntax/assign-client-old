import React from 'react';
import './Login.scss';
import LoginHeader from 'components/Login/LoginHeader/LoginHeader';
import LoginOptions from 'components/Login/LoginOptions/LoginOptions';

const Login = () => {
  return (
    <div className="login">
      <LoginHeader />
      <LoginOptions />
    </div>
  );
};

export default Login;
