import React, { Fragment } from 'react';
import { MdLockOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './PasswordInput.scss';
const PasswordInput = ({ onChange, value }) => {
  return (
    <Fragment>
      <label className="label" htmlFor="test">
        <MdLockOutline className="label__icon" />
        <span>password</span>
      </label>
      <TextField
        onChange={onChange}
        value={value}
        id="password"
        className="input"
        name="password"
        variant="outlined"
        fullWidth
        placeholder="i.e. example@!%$5475347"
        type="password"
      />
    </Fragment>
  );
};

PasswordInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default PasswordInput;
