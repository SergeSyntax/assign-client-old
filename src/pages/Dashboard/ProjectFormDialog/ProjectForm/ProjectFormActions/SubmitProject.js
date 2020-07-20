import React from 'react';
import { CircularProgress, Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  button: {
    '&:disabled': {
      backgroundColor: 'inherit',
    },
  },
  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  buttonWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -39%)',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
  },
}));

const SubmitProject = ({ text, ...rest }) => {
  const classes = useStyles();
  const savingInProgress = useSelector(state => state.projects.savingInProgress);

  return (
    <div className={classes.wrapper}>
      <Button variant="contained" color="primary" type="submit" disabled={savingInProgress}>
        <div style={{ visibility: savingInProgress ? 'hidden' : 'visible' }}>{text}</div>
        {savingInProgress && (
          <span className={classes.buttonWrapper}>
            <CircularProgress size={24} className={classes.buttonProgress} />
          </span>
        )}
      </Button>
    </div>
  );
};

SubmitProject.prototype = {
  text: PropTypes.string.isRequired,
};

export default SubmitProject;
