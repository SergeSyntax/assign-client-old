import React from 'react';
import './LoginRegisterOffer.scss';
import Link from 'components/shared/Link/Link';

const LoginRegisterOffer = () => {
  return (
    <p className="login__register-offer">
      New to Assign?
      <Link text="Join Now" to="/register" />
    </p>
  );
};

export default LoginRegisterOffer;
