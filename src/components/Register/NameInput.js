import React, { Fragment, useState } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import './NameInput.scss';
import { Field } from 'react-final-form';

const NameInput = () => (
  <Field name="name">
    {({ input, label, type, meta: { touched, error } }) => (
      <Fragment>
        <label className="label" htmlFor={input.name}>
          <MdPersonOutline className="label__icon" />
          <span>{input.name}</span>
        </label>
        <TextField
          {...input}
          id={input.name}
          className="input"
          variant="outlined"
          fullWidth
          placeholder="i.e. Steve Rozmarin"
          type="text"
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

export default NameInput;
