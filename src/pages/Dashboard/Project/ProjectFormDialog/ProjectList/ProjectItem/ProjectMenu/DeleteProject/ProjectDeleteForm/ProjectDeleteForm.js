import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from 'actions/projects';
import ProjectDeleteFormButton from './ProjectDeleteFormButton';

const useStyles = makeStyles(theme => ({
  form: { backgroundColor: '#f6f8fa', padding: theme.spacing(2) },
  label: { display: 'block', marginBottom: '1rem' },
}));

const ProjectDeleteForm = ({ projectId }) => {
  const projectTitle = useSelector(state => state.projects.projectList[projectId].title);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const classes = useStyles();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(deleteProject(projectId));
  };

  return (
    <form autoComplete="off" noValidate className={classes.form} onSubmit={onSubmit}>
      <label className={classes.label} htmlFor="project-title">
        Please type <strong>{projectTitle}</strong> to confirm.
      </label>
      <TextField
        id="project-title"
        value={value}
        onChange={e => setValue(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        autoFocus
      />
      <ProjectDeleteFormButton disabled={projectTitle !== value} />
    </form>
  );
};

ProjectDeleteForm.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectDeleteForm;
