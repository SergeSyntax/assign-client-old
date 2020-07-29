import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent, Grid, makeStyles } from '@material-ui/core';

import TaskHeader from './TaskHeader/TaskHeader';
import TaskDueDateForm from './TaskDueDateForm/TaskDueDateForm';
import TaskDescriptionForm from './TaskDescriptionForm/TaskDescriptionForm';

const useStyles = makeStyles(theme => ({}));

const TaskContent = ({ taskId, handleClose }) => {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <DialogContent>
        <TaskDueDateForm taskId={taskId} />
        <TaskDescriptionForm taskId={taskId} />
      </DialogContent>
    </Grid>
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskContent;
