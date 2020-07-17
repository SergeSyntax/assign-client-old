import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  submitButton: {
    '&, &:hover': {
      color: '#fff',
      backgroundColor: '#0073b1',
    },
    padding: '1rem 2rem',
    textTransform: 'capitalize',
    marginTop: '.9rem',
  },
});

const SubmitButton = ({ submitting, value }) => {
  const classes = useStyles();

  return (
    <Button
      className={classes.submitButton}
      disabled={submitting}
      variant="contained"
      type="submit"
    >
      {value}
    </Button>
  );
};

SubmitButton.propTypes = {
  submitting: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

export default SubmitButton;
