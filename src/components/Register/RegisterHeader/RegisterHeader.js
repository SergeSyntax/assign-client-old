import React from 'react';
import Logo from 'components/shared/Logo/Logo';
import './RegisterHeader.scss';

const RegisterHeader = () => {
  return (
    <header className="register__header">
      <Logo />
      <p className="subtitle">make most of your teamwork!</p>
    </header>
  );
};

export default RegisterHeader;
