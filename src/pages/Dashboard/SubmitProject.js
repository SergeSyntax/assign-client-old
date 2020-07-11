import React from 'react';
import { CircularProgress, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SubmitProject = ({ createInProgress }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button variant="contained" color="primary" type="submit" disabled={createInProgress}>
            Create
          </Button>
          {createInProgress && <CircularProgress size={24} className={classes.buttonProgress} />}
        </div>
      </div>
    </div>
  );
};

export default SubmitProject;
