import React, { useEffect, useCallback } from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EditProject = ({ project, open, setOpen }) => {
  const dispatch = useDispatch();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    if (!savingInProgress) closeDialog(false);
  }, [savingInProgress, closeDialog]);

  const onSubmit = values => {
    dispatch(editProject({ id: project.id, values }));
  };

  return (
    <ProjectFormDialog
      open={open}
      handleClose={closeDialog}
      onSubmit={onSubmit}
      title={project.title}
      initialValues={_.pick(project, ['title', 'accessibility'])}
      submitLabel="Update"
      savingInProgress={savingInProgress}
    />
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
