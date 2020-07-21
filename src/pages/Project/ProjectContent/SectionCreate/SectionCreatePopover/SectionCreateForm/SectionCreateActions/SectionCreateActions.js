import React from 'react';
import { makeStyles } from '@material-ui/core';
import CancelIconButton from './CancelIconButton';
import PropTypes from 'prop-types';
import SubmitButton from 'components/shared/Buttons/SubmitButton';

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

const SectionCreateActions = ({ handleClose, savingInProgress }) => {
  const classes = useStyles();

  return (
    <div className={classes.sectionCreateActions}>
      <div className={classes.cancelIconButton}>
        <CancelIconButton handleClose={handleClose} />
      </div>
      <SubmitButton
        inProgress={savingInProgress}
        size="small"
        variant="contained"
        color="primary"
        text="Create"
      />
    </div>
  );
};

SectionCreateActions.prototype = {
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default SectionCreateActions;
