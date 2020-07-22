import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';

import ProjectDeleteForm from './ProjectDeleteForm/ProjectDeleteForm';
import ProjectDeleteContent from './ProjectDeleteContent';
import ProjectDeleteHeader from './ProjectDeleteHeader';

const ProjectDelete = ({ project, open, setOpen }) => {
  const closeDeleteDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={closeDeleteDialog}>
      <ProjectDeleteHeader handleClose={closeDeleteDialog} />
      <ProjectDeleteContent project={project} />
      <ProjectDeleteForm project={project} />
    </Dialog>
  );
};

ProjectDelete.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDelete;
