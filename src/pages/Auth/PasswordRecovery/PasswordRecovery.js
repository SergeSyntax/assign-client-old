import React from 'react';
import './PasswordRecovery.scss';
import Logo from 'components/shared/Logo/Logo';
import PasswordRecoveryForm from 'components/Auth/PasswordRecovery/PasswordRecoveryForm';

const PasswordRecovery = () => {
  return (
    <div className="password-recovery">
      <Logo />
      <h2 className="password-recovery__heading">Can't login?</h2>
      <p className="password-recovery__content">
        <span>If you’ve lost or forgotten your password fill the next form</span>
        <span>to receive an email with a password recovery link.</span>
      </p>
      <div className="password-recovery__actions">
        <PasswordRecoveryForm />
      </div>
    </div>
  );
};

export default PasswordRecovery;
