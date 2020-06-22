import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import NameInput from 'components/Register/NameInput';
import EmailInput from 'components/Register/EmailInput';
import PasswordInput from 'components/Register/PasswordInput';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Form, Field } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import './RegisterForm.scss';

const schema = Joi.object().keys({
  email: Joi.string().min(3).max(255).email({ tlds: false }).required(),
  password: Joi.string().min(5).max(255).required(),
  name: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const RegisterForm = props => {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit, pristine, submitting }) => (
        <form onSubmit={handleSubmit} className="register__form" noValidate>
          <NameInput />
          <EmailInput />
          <PasswordInput />
          <Button disabled={submitting} id="register-submit" variant="contained" type="submit">
            Agree & Join
          </Button>
        </form>
      )}
    />
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
