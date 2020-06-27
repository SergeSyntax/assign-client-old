import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { clearFailureAlert } from 'actions/errors';

const ServerError = () => {
  const { relevant, error } = useSelector(state => state.errors);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearFailureAlert());
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={relevant}
      autoHideDuration={6000}
      onClose={handleClose}
      cl
    >
      <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleClose}>
        {error}
      </MuiAlert>
    </Snackbar>
  );
};

export default ServerError;
