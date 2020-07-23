import React from 'react';
import { CircularProgress, Button, makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  button: {
    textTransform: 'capitalize',
    '&:disabled': {
      backgroundColor: theme.palette.primary.main,
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
    color: '#fff',
  },
}));

const SubmitButton = ({ text = 'Submit', inProgress, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Button className={classes.button} type="submit" disabled={inProgress} {...rest}>
        <div style={{ visibility: inProgress ? 'hidden' : 'visible' }}>{text}</div>
        {inProgress && (
          <span className={classes.buttonWrapper}>
            <CircularProgress size={24} className={classes.buttonProgress} />
          </span>
        )}
      </Button>
    </div>
  );
};

SubmitButton.prototype = {
  text: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default SubmitButton;
