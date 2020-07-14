import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, makeStyles } from '@material-ui/core';
import { GoX } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  title: {
    fontSize: '1.5rem',
    padding: theme.spacing(2),
  },
}));

const DeleteHeader = ({ handleClose }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f6f8fa',
      }}
    >
      <h2 className={classes.title}> Are you absolutely sure?</h2>
      <IconButton onClick={handleClose} style={{ margin: '1rem' }}>
        <GoX style={{ fontSize: '1.3rem' }} />
      </IconButton>
    </div>
  );
};

DeleteHeader.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default DeleteHeader;
