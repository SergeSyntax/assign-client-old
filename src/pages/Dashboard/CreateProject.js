import React, { Fragment, useState, useEffect } from 'react';
import { createProject } from 'actions/projects';
import ProjectFormDialog from './ProjectFormDialog/ProjectFormDialog';
import CreateProjectButton from './CreateProjectButton';
import { useDispatch, useSelector } from 'react-redux';

const CreateProject = () => {
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
    dispatch(createProject(values));
    setSubmitStatus(true);
  };
  
  return (
    <Fragment>
      <CreateProjectButton handleClickOpen={handleClickOpen} />
      <ProjectFormDialog
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        savingInProgress={savingInProgress}
        title="Create a new project"
      />
    </Fragment>
  );
};

export default CreateProject;
