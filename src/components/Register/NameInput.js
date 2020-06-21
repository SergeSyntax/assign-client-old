import React, { Fragment, useState } from 'react';
import { MdPersonOutline } from 'react-icons/md';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './NameInput.scss';

const NameInput = ({ onChange, value, error }) => {
  const [touched, setTouched] = useState(false);

  return (
    <Fragment>
      <label className="label" htmlFor="name">
        <MdPersonOutline className="label__icon" />
        <span>name</span>
      </label>
      <TextField
        // onBlur={setTouched}
        onChange={onChange}
        value={value}
        id="name"
        className="input"
        name="name"
        variant="outlined"
        fullWidth
        placeholder="i.e. Steve Rozmarin"
        type="text"
        // error={touched}
      />
      {<small className="register__form__error">{error}</small>}
    </Fragment>
  );
};

NameInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default NameInput;
