import React, { Fragment } from 'react';
import { MdMailOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './EmailInput.scss';

const EmailInput = ({ onChange, value }) => {
  return (
    <Fragment>
      <label className="label" htmlFor="">
        <MdMailOutline className="label__icon" />
        <span>email</span>
      </label>
      <TextField
        onChange={onChange}
        value={value}
        id="email"
        className="input"
        name="email"
        variant="outlined"
        fullWidth
        placeholder="i.e. example@example.com"
        type="email"
      />
    </Fragment>
  );
};

EmailInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default EmailInput;
