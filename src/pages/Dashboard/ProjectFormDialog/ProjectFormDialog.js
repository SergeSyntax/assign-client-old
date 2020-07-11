import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import ProjectForm from './ProjectForm/ProjectForm';

const ProjectDialog = ({ title, open, handleClose, onSubmit, savingInProgress, initialValues }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <ProjectForm
          initialValues={initialValues}
          onSubmit={onSubmit}
          handleClose={handleClose}
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
  savingInProgress: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
};

export default ProjectDialog;
