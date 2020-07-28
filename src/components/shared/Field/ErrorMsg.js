import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, FormHelperText } from '@material-ui/core';

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

const ErrorMsg = ({ meta, ...rest }) => {
  const classes = useStyles(meta);
  return (
    <FormHelperText className={classes.errorMessage} {...rest}>
      {meta.error || 'empty'}
    </FormHelperText>
  );
};

ErrorMsg.propTypes = {
  meta: PropTypes.object.isRequired,
};

export default ErrorMsg;
