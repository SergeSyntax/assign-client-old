import React from 'react';
import { Form } from 'react-final-form';
import Joi from '@hapi/joi';
import generateValidation from 'utils/generateValidation';
import EmailInput from 'components/Auth/Form/EmailInput';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './PasswordRecoveryForm.scss';

const schema = Joi.object().keys({
  email: Joi.string().min(3).max(255).email({ tlds: false }).required(),
});

const validate = generateValidation(schema);

const onSubmit = values => {
  console.log(values);
};

const PasswordRecoveryForm = () => {
  return (
    <Form
      validate={validate}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit} className="login__form" noValidate>
          <EmailInput />

          <div>
            <Button
              component={Link}
              to="/login"
              // id="password-recovery-cancel-button"
              variant="outlined"
              color="primary"
              className="recovery-option"
            >
              Cancel
            </Button>
            <Button
              component={Link}
              to="/password-recovery"
              // id="password-recovery-cancel-button"
              variant="contained"
              color="primary"
              type="submit"
              className="recovery-option"
            >
              Send Recovery Link
            </Button>
            {/* <SubmitButton submitting={submitting} value="Send Recovery Link" /> */}
          </div>
        </form>
      )}
    />
  );
};

export default PasswordRecoveryForm;
