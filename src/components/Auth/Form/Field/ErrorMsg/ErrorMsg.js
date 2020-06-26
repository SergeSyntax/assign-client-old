import React from 'react';
import PropTypes from 'prop-types';
import './ErrorMsg.scss';

const ErrorMsg = ({ meta: { touched, error } }) => (
  // if the input was altered and got an active validation then it will show the error message
  <small className={`register__error_msg ${(!touched || !error) && `register__error_msg_hidden`}`}>
    {error ? error : 'EMPTY'}
  </small>
);

ErrorMsg.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default ErrorMsg;
