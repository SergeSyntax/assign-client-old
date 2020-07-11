import React, { Fragment, useState, useEffect } from 'react';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import EditProjectButton from './EditProjectButton';
import PropTypes from 'prop-types';
import _ from 'lodash';

const EditProject = ({ project }) => {
  const dispatch = useDispatch();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  const [open, setOpen] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (savingInProgress) setSubmitStatus(true);
    else if (!savingInProgress && submitStatus) handleClose();
  }, [savingInProgress, submitStatus]);

  const onSubmit = values => {
    dispatch(editProject({ id: project.id, values }));
    setSubmitStatus(true);
  };

  return (
    <Fragment>
      <EditProjectButton handleClickOpen={handleClickOpen} />
      <ProjectFormDialog
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        savingInProgress={savingInProgress}
        title={project.title}
        initialValues={_.pick(project, ['title', 'accessibility'])}
      />
    </Fragment>
  );
};

EditProject.prototype = {
  project: PropTypes.object.isRequired,
};

export default EditProject;
