import React, { useEffect, useCallback } from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/Project/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const EditProject = ({ projectId, open, setOpen }) => {
  const dispatch = useDispatch();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  const { title, accessibility } = useSelector(state => state.projects.projectList[projectId]);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    if (!savingInProgress) closeDialog(false);
  }, [savingInProgress, closeDialog]);

  const onSubmit = values => {
    dispatch(editProject({ id: projectId, values }));
  };

  return (
    <ProjectFormDialog
      open={open}
      handleClose={closeDialog}
      onSubmit={onSubmit}
      title={title}
      initialValues={{ title, accessibility }}
      submitLabel="Update"
      savingInProgress={savingInProgress}
    />
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
