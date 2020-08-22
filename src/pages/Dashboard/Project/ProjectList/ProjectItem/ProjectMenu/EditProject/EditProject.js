import React from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/Project/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const EditProject = ({ projectId, open, handleClose }) => {
  const dispatch = useDispatch();
  const { title, accessibility } = useSelector(state => state.projects.projectList[projectId]);

  const onSubmit = values => {
    dispatch(editProject({ id: projectId, values }));
  };

  return (
    <ProjectFormDialog
      open={open}
      handleClose={handleClose}
      onSubmit={onSubmit}
      title={title}
      initialValues={{ title, accessibility }}
      submitLabel="Update"
    />
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
