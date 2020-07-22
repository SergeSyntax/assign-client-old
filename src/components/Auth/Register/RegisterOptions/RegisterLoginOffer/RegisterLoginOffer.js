import React from 'react';
import { Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import './RegisterLoginOffer.scss';

export const RegisterLoginOffer = () => {
  return (
    <p className="register__login-offer">
      already on assign?
      <MaterialLink className="register__login-offer__link" component={Link} to="/login">
        sign in
      </MaterialLink>
    </p>
  );
};
