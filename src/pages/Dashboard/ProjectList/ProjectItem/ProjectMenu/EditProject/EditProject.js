import React, { useState, useEffect } from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EditProject = ({ project, open, setOpen }) => {
  const dispatch = useDispatch();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  const [submitStatus, setSubmitStatus] = useState(false);

  const closeDialog = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (savingInProgress) setSubmitStatus(true);
    else if (!savingInProgress && submitStatus) closeDialog();
  }, [savingInProgress, submitStatus]);

  const onSubmit = values => {
    dispatch(editProject({ id: project.id, values }));
    setSubmitStatus(true);
  };
  return (
    <ProjectFormDialog
      open={open}
      handleClose={closeDialog}
      onSubmit={onSubmit}
      savingInProgress={savingInProgress}
      title={project.title}
      initialValues={_.pick(project, ['title', 'accessibility'])}
    />
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
