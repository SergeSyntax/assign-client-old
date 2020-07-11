import React, { Fragment, useState } from 'react';
import { IconButton, Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import { FiFolderPlus } from 'react-icons/fi';
import ProjectForm from './ProjectForm';

const CreateProject = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton onClick={handleClickOpen} color="primary">
        <FiFolderPlus />
      </IconButton>{' '}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new project</DialogTitle>

        <DialogContent>
          <ProjectForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </Fragment>
  );
};

export default CreateProject;
