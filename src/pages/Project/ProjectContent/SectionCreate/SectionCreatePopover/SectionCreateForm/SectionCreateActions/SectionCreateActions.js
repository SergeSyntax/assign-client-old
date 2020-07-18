import React from 'react';
import SmallSubmitButton from './SmallSubmitButton';
import { makeStyles } from '@material-ui/core';
import CancelIconButton from './CancelIconButton';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  sectionCreateActions: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cancelIconButton: {
    marginRight: '1rem',
  },
}));

const SectionCreateActions = ({ handleClose }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionCreateActions}>
      <div className={classes.cancelIconButton}>
        <CancelIconButton handleClose={handleClose} />
      </div>
      <SmallSubmitButton />
    </div>
  );
};

SectionCreateActions.prototype = {
  handleClose: PropTypes.func.isRequired,
};

export default SectionCreateActions;
