import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import CancelProject from './CancelProject';
import SubmitButton from '../../../../../components/shared/Buttons/SubmitButton';

const ProjectFormActions = ({ handleClose, submitLabel, savingInProgress }) => {
  return (
    <DialogActions>
      <CancelProject handleClose={handleClose} />
      <SubmitButton
        inProgress={savingInProgress}
        variant="contained"
        color="primary"
        text={submitLabel}
      />
    </DialogActions>
  );
};

ProjectFormActions.propTypes = {
  handleClose: PropTypes.func.isRequired,
  submitLabel: PropTypes.string.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default ProjectFormActions;
