import React from 'react';
import './RegisterOptions.scss';
import AuthButtons from 'components/Auth/OAuth/AuthButtons';
import RegisterForm from './RegisterForm/RegisterForm';
import { RegisterLegal } from './RegisterLegal/RegisterLegal';
import { RegisterLoginOffer } from './RegisterLoginOffer/RegisterLoginOffer';
export const RegisterOptions = () => {
  return (
    <div className="register__options">
      <AuthButtons />
      <RegisterForm />
      <RegisterLegal />
      <RegisterLoginOffer />
    </div>
  );
};
