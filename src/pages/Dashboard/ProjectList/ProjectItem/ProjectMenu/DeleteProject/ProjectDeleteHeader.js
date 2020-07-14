import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, makeStyles } from '@material-ui/core';
import { GoX } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f6f8fa',
  },
  title: {
    fontSize: '1.5rem',
    padding: theme.spacing(2),
  },
  closeButton: { margin: '1rem' },
  closeButtonIcon: { fontSize: '1.3rem' },
}));

const ProjectDeleteHeader = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h2 className={classes.title}> Are you absolutely sure?</h2>
      <IconButton onClick={handleClose} className={classes.closeButton}>
        <GoX style={classes.closeButtonIcon} />
      </IconButton>
    </div>
  );
};

ProjectDeleteHeader.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ProjectDeleteHeader;
