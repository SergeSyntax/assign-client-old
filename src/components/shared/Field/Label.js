import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  label: {
    textTransform: 'capitalize',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    fontSize: '1.6rem',
    padding: '0.5rem',
  },
  icon: {
    marginLeft: '1rem',
    marginRight: '0.7rem',
    fontSize: '1.2em',
  },
}));

const Label = ({ name, children, icon: Icon }) => {
  const classes = useStyles();

  return (
    <label className={classes.label} htmlFor={name}>
      <Icon className={classes.icon} />
      <span>{name}</span>
      {children}
    </label>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Label;
