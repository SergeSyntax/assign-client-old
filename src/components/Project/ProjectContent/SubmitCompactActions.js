import React from 'react';
import { makeStyles } from '@material-ui/core';
import CancelIconButton from '../../shared/Buttons/CancelIconButton';
import PropTypes from 'prop-types';
import SubmitButton from 'components/shared/Buttons/SubmitButton';

const useStyles = makeStyles(theme => ({
  submitCompactActions: {
    marginTop: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cancelIconButton: {
    margin: '1rem',
  },
}));

const SubmitCompactActions = ({ handleClose, savingInProgress }) => {
  const classes = useStyles();

  return (
    <div className={classes.submitCompactActions}>
      <div className={classes.cancelIconButton}>
        <CancelIconButton onClick={handleClose} />
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

SubmitCompactActions.prototype = {
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default SubmitCompactActions;
