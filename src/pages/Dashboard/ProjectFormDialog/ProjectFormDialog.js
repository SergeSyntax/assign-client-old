import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import ProjectForm from './ProjectForm/ProjectForm';
import { useDispatch, useSelector } from 'react-redux';

const ProjectDialog = ({ OpenDialogButton, submitAction }) => {
  const dispatch = useDispatch();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (savingInProgress) setSubmitStatus(true);
    else if (!savingInProgress && submitStatus) handleClose();
  }, [savingInProgress, submitStatus]);

  const onSubmit = values => {
    dispatch(submitAction(values));
    setSubmitStatus(true);
  };

  return (
    <Fragment>
      <OpenDialogButton handleClickOpen={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new project</DialogTitle>
        <DialogContent>
          <ProjectForm
            onSubmit={onSubmit}
            handleClose={handleClose}
            savingInProgress={savingInProgress}
          />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

ProjectDialog.propTypes = {
  OpenDialogButton: PropTypes.func.isRequired,
  submitAction: PropTypes.func.isRequired,
};

export default ProjectDialog;
