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
  buttonText: {
    visibility: inProgress => (inProgress ? 'hidden' : 'visible'),
  },
}));

const SubmitButton = ({ text = 'Submit', inProgress, ...rest }) => {
  const classes = useStyles(inProgress);

  return (
    <div className={classes.wrapper}>
      <Button className={classes.button} type="submit" disabled={inProgress} {...rest}>
        <div className={classes.buttonText}>{text}</div>
        {inProgress && (
          <span data-testid="spinner" className={classes.buttonWrapper}>
            <CircularProgress size="2rem" className={classes.buttonProgress} />
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
