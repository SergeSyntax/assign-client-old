import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../../actions';

import Button from '@material-ui/core/Button';
import MaterialLink from '@material-ui/core/Link';
import AuthButtons from 'components/Register/AuthButtons';

import RegisterHeader from 'components/Register/RegisterHeader';
import './Register.scss';
import RegisterForm from 'components/Register/RegisterForm';
import RegisterFooter from 'components/Register/RegisterFooter';

const Register = () => {
  return (
    <div className="register">
      <RegisterHeader />
      <div className="register__options">
        <AuthButtons />
        <RegisterForm />
        <p className="register__legal">
          you agree to the
          <MaterialLink className="register__legal__link" component={Link} to="/privacy-policy">
            Privacy Policy
          </MaterialLink>
          and
          <MaterialLink className="register__legal__link" component={Link} to="/terms">
            Terms of Use
          </MaterialLink>
        </p>
        <p className="register__login-offer">
          already on assign?
          <MaterialLink className="register__login-offer__link" component={Link} to="/login">
            sign in
          </MaterialLink>
        </p>
      </div>
      <RegisterFooter />
    </div>
  );
};

export default connect(null, {})(Register);
