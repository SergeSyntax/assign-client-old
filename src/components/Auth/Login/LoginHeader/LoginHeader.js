import React from 'react';
import './LoginHeader.scss';
import Logo from 'components/shared/Logo/Logo';

const LoginHeader = () => {
  return (
    <div className="login__header">
      <Logo />
      <div className="login__header__subtitle">
        <h2 className="login__header__subtitle__heading">Welcome Back</h2>
        <p className="login__header__subtitle__content">
          <span>Ready to get your team on track?</span>
          <span>Then don't delay organize and prioritize your project</span>
          <span>with Assign?</span>
        </p>
      </div>
    </div>
  );
};

export default LoginHeader;
