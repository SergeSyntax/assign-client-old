import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { registerUser } from '../../../actions';
import { MdMailOutline, MdLockOutline, MdPersonOutline } from 'react-icons/md';

import Button from '@material-ui/core/Button';
import MaterialLink from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import './Register.scss';
import Logo from 'components/shared/Logo/Logo';
import AuthButtons from 'components/Register/AuthButtons';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <div className="register">
      <header className="register__header">
        <Logo />
        <p className="subtitle">make most of your teamwork!</p>
      </header>
      <div className="register__actions">
        <AuthButtons />
        <form
          onSubmit={onSubmit}
          className="register__form"
        >
          <Fragment>
            <label className="label" htmlFor="name">
              <MdPersonOutline className="label__icon" />
              <span>name</span>
            </label>
            <TextField
              onChange={onChange}
              value={formData.name}
              id="name"
              className="input"
              name="name"
              variant="outlined"
              fullWidth
              placeholder="i.e. Steve Rozmarin"
              type="text"
            />
          </Fragment>
          <Fragment>
            <label className="label" htmlFor="">
              <MdMailOutline className="label__icon" />
              <span>email</span>
            </label>
            <TextField
              onChange={onChange}
              value={formData.email}
              id="email"
              className="input"
              name="email"
              variant="outlined"
              fullWidth
              placeholder="i.e. example@example.com"
              type="email"
            />
          </Fragment>
          <Fragment>
            {' '}
            <label className="label" htmlFor="test">
              <MdLockOutline className="label__icon" />
              <span>password</span>
            </label>
            <TextField
              onChange={onChange}
              value={formData.password}
              id="password"
              className="input"
              name="password"
              variant="outlined"
              fullWidth
              placeholder="i.e. example@!%$5475347"
              type="password"
            />
          </Fragment>
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
