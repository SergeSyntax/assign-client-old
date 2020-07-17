import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  errorMessage: {
    color: theme.palette.error.dark,
    paddingTop: '.2rem',
    paddingBottom: '.3rem',
    paddingLeft: '.1rem',
    fontWeight: 500,
    visibility: ({ touched, error }) => (touched && error ? 'visible' : 'hidden'),
  },
}));

const ErrorMsg = ({ meta }) => {
  const classes = useStyles(meta);
  return (
    <Typography className={classes.errorMessage} variant="caption">
      {meta.error || 'empty'}
    </Typography>
  );
};

ErrorMsg.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default ErrorMsg;
