import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';

const CancelProject = ({ handleClose }) => {
  return (
    <Button onClick={handleClose} color="primary">
      Cancel
    </Button>
  );
};

CancelProject.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default CancelProject;
