import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import CancelProject from './CancelProject';
import SubmitProject from './SubmitProject';

const ProjectFormActions = ({ handleClose, savingInProgress }) => {
  return (
    <DialogActions>
      <CancelProject handleClose={handleClose} />
      <SubmitProject savingInProgress={savingInProgress} />
    </DialogActions>
  );
};

ProjectFormActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default ProjectFormActions;
