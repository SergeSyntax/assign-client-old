import React from 'react';
import SmallSubmitButton from './SmallSubmitButton';
import { IconButton, makeStyles } from '@material-ui/core';
import { GoX } from 'react-icons/go';
import CancelIconButton from './CancelIconButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  sectionCreateActions: {
    marginTop: '1rem',
    display: 'flex',
  },
}));

const SectionCreateActions = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionCreateActions}>
      <SmallSubmitButton />
      <div>
        <CancelIconButton handleClose={handleClose} />
      </div>
    </div>
  );
};

SectionCreateActions.prototype = {
  handleClose: PropTypes.func.isRequired,
};

export default SectionCreateActions;
