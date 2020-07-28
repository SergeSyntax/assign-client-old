import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import { GoX } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  cancelIconButton: { padding: '.7rem', borderRadius: '.6rem' },
}));

const CancelIconButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.cancelIconButton} size="small" onClick={onClick}>
      <GoX />
    </IconButton>
  );
};

CancelIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CancelIconButton;
