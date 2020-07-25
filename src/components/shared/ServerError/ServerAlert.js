import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlert } from 'actions/alerts';

const ServerAlert = () => {
  const message = useSelector(state => state.alerts.message);
  const relevant = useSelector(state => state.alerts.relevant);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') dispatch(clearAlert());
  };

  return (
    <Snackbar
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={relevant}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleClose}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

export default ServerAlert;
