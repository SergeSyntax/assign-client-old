import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import ProjectForm from './ProjectForm/ProjectForm';

const ProjectDialog = ({
  title,
  open,
  handleClose,
  onSubmit,
  initialValues,
  submitLabel,
  savingInProgress,
}) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <ProjectForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          handleClose={handleClose}
          submitLabel={submitLabel}
          savingInProgress={savingInProgress}
        />
      </DialogContent>
    </Dialog>
  );
};

ProjectDialog.propTypes = {
  title: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  submitLabel: PropTypes.string.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default ProjectDialog;
