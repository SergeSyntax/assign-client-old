import React, { forwardRef, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Dialog, MenuItem, ListItemIcon } from '@material-ui/core';

import DeleteProjectForm from './/DeleteProjectForm';
import DeleteContent from './/DeleteContent';
import DeleteHeader from './/DeleteHeader';
import DeleteButton from './/DeleteButton';

const DeleteProject = forwardRef(({ project, open, setOpen }, ref) => {
  const closeDeleteDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={closeDeleteDialog}>
      <DeleteHeader handleClose={closeDeleteDialog} />
      <DeleteContent project={project} />
      <DeleteProjectForm project={project} />
    </Dialog>
  );
});

DeleteProject.propTypes = {
  project: PropTypes.object.isRequired,
};

export default DeleteProject;
