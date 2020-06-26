import React from 'react';
import RegisterHeader from 'components/Register/RegisterHeader/RegisterHeader';
import RegisterFooter from 'components/Register/RegisterFooter/RegisterFooter';
import { RegisterOptions } from 'components/Register/RegisterOptions/RegisterOptions';
import './Register.scss';

const Register = () => {
  return (
    <div className="register">
      <RegisterHeader />
      <RegisterOptions />
      <RegisterFooter />
    </div>
  );
};

export default Register;
