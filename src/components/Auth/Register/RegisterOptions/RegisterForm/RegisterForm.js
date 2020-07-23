import React from 'react';
import NameInput from 'components/Auth/Form/NameInput';
import EmailInput from 'components/Auth/Form/EmailInput';
import PasswordInput from 'components/Auth/Form/PasswordInput';
import { Form } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import './RegisterForm.scss';
import UserSubmitButton from '../../../Form/UserSubmitButton';
import { useDispatch } from 'react-redux';
import { createUser } from 'actions/users';

const schema = Joi.object().keys({
  email: Joi.string().min(3).max(255).email({ tlds: false }).required(),
  password: Joi.string().min(5).max(255).required(),
  name: Joi.string().min(1).max(255).required(),
});

const validate = generateValidation(schema);

const RegisterForm = () => {
  const dispatch = useDispatch();
  const onSubmit = values => {
    dispatch(createUser(values));
  };

  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form autoComplete="off" onSubmit={handleSubmit} className="register__form" noValidate>
          <NameInput />
          <EmailInput />
          <PasswordInput />
          <UserSubmitButton submitting={submitting} value="Agree & Join" />
        </form>
      )}
    />
  );
};

export default RegisterForm;
