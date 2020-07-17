import React from 'react';
import { Button, makeStyles, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-flex',
  },
  wrapper: {
    display: 'inherit',
    position: 'relative',
  },
  buttonProgress: {
    color: theme.palette.primary.main,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -9.4,
    marginLeft: -15,
  },
}));

const SmallSubmitButton = () => {
  const classes = useStyles();
  const savingInProgress = useSelector(state => state.sections.savingInProgress);

  return (
    <div className={classes.wrapper}>
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Button
            size="small"
            color="primary"
            type="submit"
            variant="contained"
            style={{ marginRight: '1rem' }}
            disabled={savingInProgress}
          >
            Create
          </Button>

          {savingInProgress && <CircularProgress size={20} className={classes.buttonProgress} />}
        </div>
      </div>
    </div>
  );
};

export default SmallSubmitButton;
