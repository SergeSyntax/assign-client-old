import React, { useEffect, useCallback } from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EditProject = ({ project, open, setOpen }) => {
  const dispatch = useDispatch();
  const savingFinished = useSelector(state => state.projects.savingFinished);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  useEffect(() => {
    if (savingFinished) closeDialog(false);
  }, [savingFinished, closeDialog]);

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
    />
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
