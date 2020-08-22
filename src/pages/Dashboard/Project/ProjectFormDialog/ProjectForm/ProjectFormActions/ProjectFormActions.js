import React from 'react';
import PropTypes from 'prop-types';
import { DialogActions } from '@material-ui/core';
import CancelProject from './CancelProject';
import SubmitButton from '../../../../../../components/shared/Buttons/SubmitButton';
import { useSelector } from 'react-redux';

const ProjectFormActions = ({ handleClose, submitLabel }) => {
  const savingInProgress = useSelector(state => state.projects.savingInProgress);

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
};

export default ProjectFormActions;
