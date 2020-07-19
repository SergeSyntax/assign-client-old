import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, FormHelperText } from '@material-ui/core';

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
    <FormHelperText className={classes.errorMessage}>
      {meta.error || 'empty'}
    </FormHelperText>
  );
};

ErrorMsg.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default ErrorMsg;
