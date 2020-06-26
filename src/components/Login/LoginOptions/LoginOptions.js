import React from 'react';
import './LoginOptions.scss';
import AuthButtons from 'components/Auth/OAuth/AuthButtons';
import LoginForm from './LoginForm/LoginForm';
import LoginRegisterOffer from './LoginRegisterOffer/LoginRegisterOffer';
import { PasswordRecovery } from './PasswordRecovery/PasswordRecovery';

const LoginOptions = () => {
  return (
    <div className="login__options">
      <AuthButtons />
      <LoginForm />
      <PasswordRecovery />
      <LoginRegisterOffer />
    </div>
  );
};

export default LoginOptions;
