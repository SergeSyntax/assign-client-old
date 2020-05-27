import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../../actions';
import { MdMailOutline, MdLockOutline } from 'react-icons/md';
import { IoMdPerson } from 'react-icons/io';
import { IoLogoGoogle } from 'react-icons/io';
import { FaFacebookF } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import MaterialLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import './Register.scss';
import Logo from 'components/shared/Logo/Logo';

const formFields = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'i.e. Steve Rozmarin',
    icon: IoMdPerson,
    minLength: 2,
    maxLength: 255,
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'i.e. example@example.com',
    icon: MdMailOutline,
    minLength: 5,
    maxLength: 255,
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'i.e. max@!%$5475347',
    icon: MdLockOutline,
    minLength: 6,
    maxLength: 255,
  },
];

const renderButtons = () =>
  formFields.map((filed) => (
    <Fragment key={filed.name}>
      <label className="label" htmlFor={filed.name}>
        <filed.icon className="label__icon" />
        <span>{filed.name}</span>
      </label>
      <TextField
        id={filed.name}
        className="input"
        name={filed.name}
        variant="outlined"
        fullWidth
        placeholder={filed.placeholder}
        type={filed.type}
      />
    </Fragment>
  ));

const Register = () => {
  return (
    <div className="register">
      <header className="register__header">
        <Logo />
        <p className="subtitle">make most of your teamwork!</p>
      </header>
      <div className="register__actions">
        <div className="auth-buttons">
          <Button variant="contained" color="default" fullWidth className="google-button ">
            <IoLogoGoogle className="google-button__icon" />
            <span> Continue with Google</span>
          </Button>
          <Button variant="contained" color="default" fullWidth className="facebook-button">
            <FaFacebookF className="facebook-button__icon" />
            <span> Continue with facebook</span>
          </Button>
        </div>
        <form className="register__form">
          {renderButtons()}

          <Button id="register-submit" variant="contained" type="submit">
            Agree & Join
          </Button>
        </form>
        <p className="register__legal">
          you agree to the <MaterialLink href="/privacy-policy">Privacy Policy</MaterialLink> and{' '}
          <MaterialLink href="/terms">Terms of Use</MaterialLink>
        </p>
        <p className="register__login-offer">
          already on assign?{' '}
          <MaterialLink className="register__login-offer__link" href="/login">
            sign in
          </MaterialLink>
        </p>
      </div>
      <p className="register__copyright"> &copy; 2019 Sergway Khodyachikh. All rights reserved</p>
    </div>
  );
};

export default connect(null, {})(Register);
