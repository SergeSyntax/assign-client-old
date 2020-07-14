import React, { Fragment, useState, useEffect } from 'react';
import { createProject } from 'actions/projects';
import ProjectFormDialog from './ProjectFormDialog/ProjectFormDialog';
import CreateProjectButton from './CreateProjectButton';
import { useDispatch, useSelector } from 'react-redux';

const CreateProject = () => {
  const dispatch = useDispatch();
  const savingFinished = useSelector(state => state.projects.savingFinished);
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (savingFinished) handleClose();
  }, [savingFinished]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = values => {
    dispatch(createProject(values));
  };

  return (
    <Fragment>
      <CreateProjectButton handleClickOpen={handleClickOpen} />
      <ProjectFormDialog
        open={open}
        handleClose={handleClose}
        onSubmit={onSubmit}
        title="Create a new project"
        submitLabel="Create"
      />
    </Fragment>
  );
};

export default CreateProject;
