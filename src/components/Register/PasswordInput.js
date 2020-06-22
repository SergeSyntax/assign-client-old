import React, { Fragment, useState } from 'react';
import { MdLockOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import './PasswordInput.scss';
import { Field } from 'react-final-form';

const PasswordInput = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  return (
    <Field name="password">
      {({ input, label, type, meta: { touched, error } }) => (
        <Fragment>
          <label className="label" htmlFor={input.name}>
            <MdLockOutline className="label__icon" />
            <span>password</span>
            <span
              style={{ display: 'block', marginLeft: 'auto' }}
              onClick={() => setPasswordVisibility(prev => !prev)}
            >
              {passwordVisibility ? 'hide' : 'show'}
            </span>
          </label>
          <TextField
            {...input}
            id={input.name}
            className="input"
            variant="outlined"
            fullWidth
            placeholder="i.e. example@!%$5475347"
            type={passwordVisibility ? 'text' : 'password'}
            error={touched && error && true}
          />
          {touched && error ? (
            <small className="register__form__error">{error}</small>
          ) : (
            <br className="register__form__error" />
          )}{' '}
        </Fragment>
      )}
    </Field>
  );
};

export default PasswordInput;
