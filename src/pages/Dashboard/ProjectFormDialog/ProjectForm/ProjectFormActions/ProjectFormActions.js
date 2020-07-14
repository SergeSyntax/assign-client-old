import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import CancelProject from './CancelProject';
import SubmitProject from './SubmitProject';

const ProjectFormActions = ({ handleClose, submitLabel }) => {
  return (
    <DialogActions>
      <CancelProject handleClose={handleClose} />
      <SubmitProject text={submitLabel} />
    </DialogActions>
  );
};

ProjectFormActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
};

export default ProjectFormActions;
