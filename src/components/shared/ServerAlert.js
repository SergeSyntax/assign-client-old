import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { clearAlert } from 'actions/alerts';
import {
  // Button,
  IconButton,
} from '@material-ui/core';
import { GoX } from 'react-icons/go';

const ServerAlert = () => {
  const message = useSelector(state => state.alerts.message);
  const relevant = useSelector(state => state.alerts.relevant);
  const error = useSelector(state => state.alerts.error);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason !== 'clickaway') dispatch(clearAlert());
  };

  return (
    <Snackbar
      message={message}
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      open={relevant}
      autoHideDuration={error ? 6000 : 1000}
      onClose={handleClose}
      action={
        error ? null : (
          <React.Fragment>
            {/* <Button color="secondary" size="small" onClick={handleClose}>
              UNDO
            </Button> */}
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <GoX fontSize="small" />

              {/* <CloseIcon fontSize="small" /> */}
            </IconButton>
          </React.Fragment>
        )
      }
    >
      {error ? (
        <MuiAlert elevation={4} variant="filled" severity="error" onClose={handleClose}>
          {message}
        </MuiAlert>
      ) : null}
    </Snackbar>
  );
};

export default ServerAlert;
