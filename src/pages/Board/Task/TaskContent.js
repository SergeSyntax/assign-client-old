import React from 'react';
import PropTypes from 'prop-types';
import { DialogContent, Grid } from '@material-ui/core';

import TaskHeader from './TaskHeader/TaskHeader';
import TaskDueDateForm from './TaskDueDateForm/TaskDueDateForm';
import TaskDescriptionForm from './TaskDescriptionForm/TaskDescriptionForm';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const TaskContent = ({ taskId, handleClose, projectId }) => {
  const taskIds = useSelector(state => state.tasks.taskIds);

  return taskIds.includes(taskId) ? (
    <Grid container direction="column">
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <DialogContent>
        <TaskDueDateForm taskId={taskId} />
        <TaskDescriptionForm taskId={taskId} />
      </DialogContent>
    </Grid>
  ) : (
    <Redirect to={`/project/${projectId}`} />
  );
};

TaskContent.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskContent;
