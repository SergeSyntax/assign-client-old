import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Grid, makeStyles } from '@material-ui/core';
import { GoX } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  taskOptions: { marginLeft: '2rem', display: 'inline-flex', paddingTop: '.5rem' },
  taskCloseButton: { padding: '.7rem', borderRadius: '.6rem' },
}));

const CloseTaskButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.taskOptions}>
      <IconButton className={classes.taskCloseButton} size="medium" onClick={onClick}>
        <GoX />
      </IconButton>
    </Grid>
  );
};

CloseTaskButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CloseTaskButton;
