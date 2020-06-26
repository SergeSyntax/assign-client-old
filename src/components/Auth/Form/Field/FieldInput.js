import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const FieldInput = ({ input, meta: { touched, error }, placeholder, type }) => {
  return (
    <TextField
      {...input}
      id={input.name}
      fullWidth
      error={touched && error && true}
      placeholder={placeholder}
      type={type}
      className="input"
      variant="outlined"
    />
  );
};

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FieldInput;
