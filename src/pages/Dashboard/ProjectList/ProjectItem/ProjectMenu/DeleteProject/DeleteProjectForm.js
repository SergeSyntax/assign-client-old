import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField, Button, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deleteProject } from 'actions/projects';

const useStyles = makeStyles(theme => ({
  form: { backgroundColor: '#f6f8fa', padding: theme.spacing(2) },
  // backdrop: {
  //   zIndex: theme.zIndex.drawer + 1,
  //   color: '#fff',
  // },
}));

const DeleteProjectForm = ({ project }) => {
  const [value, setValue] = useState('');

  const classes = useStyles();

  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    dispatch(deleteProject(project.id));
  };

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <label style={{ display: 'block', marginBottom: '1rem' }} htmlFor="">
        Please type <strong>{project.title}</strong> to confirm.
      </label>
      <TextField
        value={value}
        onChange={e => setValue(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        autoFocus
      />
      <Button
        disabled={project.title !== value}
        style={{ marginTop: '1rem', textTransform: 'capitalize' }}
        fullWidth
        size="small"
        color="secondary"
        variant="contained"
        type="submit"
      >
        I understand the consequences, delete this project
      </Button>
    </form>
  );
};

DeleteProjectForm.propTypes = {
  project: PropTypes.object.isRequired,
};

export default DeleteProjectForm;
