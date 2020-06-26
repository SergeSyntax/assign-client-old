import React from 'react';
import Link from 'components/Auth/Link/Link';
import './RegisterLegal.scss';

export const RegisterLegal = () => {
  return (
    <p className="register__legal">
      you agree to the
      <Link text="Privacy Policy" to="/privacy-policy" />
      and
      <Link text="Terms of Use" to="/terms" />
    </p>
  );
};
