import React, { forwardRef, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import {
  MenuItem,
  ListItemIcon,
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  TextField,
  Button,
  IconButton,
} from '@material-ui/core';
import { GoX, GoAlert } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '1.5rem',
    padding: theme.spacing(2),
  },
  alertMessage: {
    fontSize: '1.4rem',

    padding: theme.spacing(2),
    backgroundColor: '#fffbdd',
  },
  content: { backgroundColor: '#f6f8fa', padding: theme.spacing(2), fontSize: '1.4rem' },
  form: { backgroundColor: '#f6f8fa', padding: theme.spacing(2) },
}));

const DeleteProject = forwardRef(({ project }, ref) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <MenuItem onClick={handleClickOpen} innerRef={ref}>
        <ListItemIcon>
          <GoX />
        </ListItemIcon>
        Delete
      </MenuItem>

      <Dialog open={open} onClose={handleClose}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f6f8fa',
          }}
        >
          <h2 className={classes.title}> Are you absolutely sure?</h2>

          <IconButton onClick={handleClose} style={{ margin: '1rem' }}>
            <GoX style={{ fontSize: '1.3rem' }} />
          </IconButton>
        </div>
        <p className={classes.alertMessage}>
          Unexpected bad things will happen if you don’t read this!
        </p>
        <div className={classes.content}>
          <p style={{ paddingBottom: '1rem' }}>
            This action <strong>cannot</strong> be undone. This will permanently delete the
            <strong>{project.title}</strong> project, lists, tasks, and activity, and remove all
            collaborator associations.
          </p>
          <p>
            <strong>Note:</strong> there is an option to put your project in the archive. Once{' '}
            <strong>archived</strong>, a project's access changes to <strong>view only</strong> for
            all participants. Archiving a project allows you to retain historical information so
            nothing will be lost.
          </p>
        </div>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault();
            alert('wrok');
          }}
        >
          <label style={{ display: 'block', marginBottom: '1rem' }} htmlFor="">
            Please type <strong>{project.title}</strong> to confirm.
          </label>
          <TextField
            value={value}
            onChange={e => setValue(e.target.value)}
            variant="outlined"
            size="small"
            fullWidth
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
      </Dialog>
    </Fragment>
  );
});

DeleteProject.propTypes = {};

export default DeleteProject;
