import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, makeStyles } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  taskPropertyWrapper: {
    fontSize: '1.6rem',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  taskPropertyIcon: { marginRight: '1rem' },
  taskPropertyText: { fontSize: 'inherit' },
}));

const TaskPropertyLabel = ({ Icon, text, label }) => {
  const classes = useStyles();
  return (
    <Grid item component="label"  htmlFor={label} className={classes.taskPropertyWrapper}>
      <Icon className={classes.taskPropertyIcon} />{' '}
      <Typography className={classes.taskPropertyText}>{text}</Typography>
    </Grid>
  );
};

TaskPropertyLabel.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  Icon: PropTypes.func.isRequired,
};

export default TaskPropertyLabel;
