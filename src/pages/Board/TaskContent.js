import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import CancelIconButton from 'components/shared/Buttons/CancelIconButton';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';

const TaskContent = ({ taskId, handleClose }) => {
  const task = useSelector(state => state.tasks.taskList[taskId]);

  return (
    <Fragment>
      <DialogTitle id="responsive-dialog-title">
        <Grid container justify="space-between">
          <Grid item>{task.title}</Grid>
          <Grid item>
            <MenuIconButton style={{ marginRight: '1rem' }} handleClose={handleClose} />
            <CancelIconButton handleClose={handleClose} />
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Let Google help apps determine location. This means sending anonymous location data to
          Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary">
          Disagree
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Fragment>
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskContent;
