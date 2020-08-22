import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from '@material-ui/core';

import ProjectDeleteForm from './ProjectDeleteForm/ProjectDeleteForm';
import ProjectDeleteContent from './ProjectDeleteContent';
import ProjectDeleteHeader from './ProjectDeleteHeader';

const ProjectDelete = ({ projectId, open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <ProjectDeleteHeader handleClose={handleClose} />
      <ProjectDeleteContent projectId={projectId} />
      <ProjectDeleteForm projectId={projectId} />
    </Dialog>
  );
};

ProjectDelete.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectDelete;
