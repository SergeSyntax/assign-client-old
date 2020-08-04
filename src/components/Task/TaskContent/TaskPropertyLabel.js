import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  taskPropertyWrapper: {
    fontSize: '1.7rem',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1rem',
    fontWeight: 500,
    letterSpacing: '.15rem',
  },
  taskPropertyIcon: { marginRight: '1rem' },
  taskPropertyText: { fontSize: 'inherit', letterSpacing: 'inherit', fontWeight: 'inherit' },
}));

const TaskPropertyLabel = ({ Icon, label, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid item component="label" htmlFor={label} className={classes.taskPropertyWrapper} {...rest}>
      <Icon className={classes.taskPropertyIcon} />{' '}
      <Typography className={classes.taskPropertyText}>{_.capitalize(label)}</Typography>
    </Grid>
  );
};

TaskPropertyLabel.propTypes = {
  label: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default TaskPropertyLabel;
