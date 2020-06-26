import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './SubmitButton.scss';

const SubmitButton = ({ submitting, value }) => {
  return (
    <Button disabled={submitting} id="register-submit" variant="contained" type="submit">
      {value}
    </Button>
  );
};

SubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubmitButton;
