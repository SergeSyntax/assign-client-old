import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteProject } from 'actions/projects';
import ProjectDeleteFormButton from './ProjectDeleteFormButton';

const useStyles = makeStyles(theme => ({
  form: { backgroundColor: '#f6f8fa', padding: theme.spacing(2) },
  label: { display: 'block', marginBottom: '1rem' },
}));

const ProjectDeleteForm = ({ project }) => {
  const [value, setValue] = useState('');

  const classes = useStyles();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(deleteProject(project.id));
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <label className={classes.label} htmlFor="project-title">
        Please type <strong>{project.title}</strong> to confirm.
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
      <ProjectDeleteFormButton disabled={project.title !== value} />
    </form>
  );
};

ProjectDeleteForm.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDeleteForm;
