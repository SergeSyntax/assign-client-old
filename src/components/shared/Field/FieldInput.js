import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const FieldInput = ({ input, meta: { touched, error }, ...rest }) => {
  return (
    <TextField
      {...input}
      id={input.name}
      fullWidth
      error={touched && error && true}
      variant="outlined"
      {...rest}
    />
  );
};

FieldInput.propTypes = {
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
};

export default FieldInput;
