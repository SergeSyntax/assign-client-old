import React, { useReducer } from 'react';
import Button from '@material-ui/core/Button';
import NameInput from 'components/Register/NameInput';
import EmailInput from 'components/Register/EmailInput';
import PasswordInput from 'components/Register/PasswordInput';
import PropTypes from 'prop-types';
import _ from 'lodash';
import './RegisterForm.scss';

const RegisterForm = props => {
  const initialState = {
    name: {
      value: '',
      error: '',
    },
    email: {
      value: '',
      error: '',
    },
    password: {
      value: '',
      error: '',
    },
  };

  const validations = {
    email: {
      regExp: /^(\S+@\S+\.\S+){1,255}$/,
      message: 'the email address you provided is invalid',
    },
    password: { regExp: /^.{6,255}$/, message: 'your name should contain at least 6 characters' },
  };

  const MAX_LENGTH = 255;
  const MIN_LENGTH = 1;

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case 'UPDATE_VALUE':
        return { ...state, [payload.name]: { ...state[payload.name], value: payload.value } };
      case 'VALIDATE_VALUE':
        return { ...state, [payload.name]: { ...state[payload.name], validated: payload.value } };
      case 'VALIDATE_VALUES': {
        const errors = Object.entries(payload);
        const stateValues = Object.entries(state);

        const newState = {};

        errors.forEach(error => {
          newState[error[0]].error = error[1];
        });

        return newState;
      }
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const validateAll = () => {
    // convert the state to an array of entries
    const formState = Object.entries(state);
    const error = {};

    formState.forEach(inputData => {
      const inputName = inputData[0];
      const inputValue = inputData[1].value;
      const specificValidation = validations[inputName];

      // check if the input contain any string
      if (inputValue.length < MIN_LENGTH) error[inputName] = `please enter your ${inputName}`;
      // check if the input don't exceed the limit
      else if (inputValue.length > MAX_LENGTH)
        error[inputName] = `your ${inputName} required to be less then 255 characters long`;
      // check for input specific validations and invoke them
      else if (specificValidation && !specificValidation.regExp.test(inputValue))
        error[inputName] = specificValidation.message;
    });

    return error;
  };

  const onChange = e =>
    dispatch({ type: 'UPDATE_VALUE', payload: { name: e.target.name, value: e.target.value } });
  const onBlur = e =>
    dispatch({ type: 'VALIDATE_VALUE', payload: { name: e.target.name, value: true } });

  const onSubmit = e => {
    e.preventDefault();
    const error = validateAll();
    dispatch({ type: 'VALIDATE_VALUES', payload: error });
    console.log(state);
  };

  return (
    <form onSubmit={onSubmit} className="register__form" noValidate>
      <NameInput
        // onBlur={onBlur}
        onChange={onChange}
        value={state.name.value}
        error={state.name.error}
        // error={state.name.error}
      />
      <EmailInput onChange={onChange} value={state.email.value} />
      <PasswordInput onChange={onChange} value={state.password.value} />
      <Button id="register-submit" variant="contained" type="submit">
        Agree & Join
      </Button>
    </form>
  );
};

RegisterForm.propTypes = {};

export default RegisterForm;
