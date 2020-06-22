import React, { Fragment } from 'react';
import { MdMailOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import './EmailInput.scss';
import { Field } from 'react-final-form';

const EmailInput = () => {
  return (
    <Field name="email">
      {({ input, meta: { touched, error } }) => (
        <Fragment>
          <label className="label" htmlFor={input.name}>
            <MdMailOutline className="label__icon" />
            <span>email</span>
          </label>
          <TextField
            {...input}
            id={input.name}
            placeholder="i.e. example@example.com"
            type="email"
            className="input"
            variant="outlined"
            fullWidth
            error={touched && error && true}
          />
          {touched && error ? (
            <small className="register__form__error">{error}</small>
          ) : (
            <br className="register__form__error" />
          )}
        </Fragment>
      )}
    </Field>
  );
};

export default EmailInput;
