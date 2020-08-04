import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogContent,
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardContent,
} from '@material-ui/core';

import TaskHeader from './TaskHeader/TaskHeader';
import TaskDueDateForm from './TaskDueDateForm/TaskDueDateForm';
import TaskDescriptionForm from './TaskDescriptionForm/TaskDescriptionForm';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateComment from './TaskActivity/CreateComment';
import ActivityList from './TaskActivity/ActivityList';
import { GoX } from 'react-icons/go';
import { deleteTask } from 'actions/tasks';

const TaskContent = ({ taskId, handleClose, projectId }) => {
  const taskIds = useSelector(state => state.tasks.taskIds);
  const dispatch = useDispatch();

  const onClick = () => {
    handleClose();
    dispatch(deleteTask(taskId));
  };

  return taskIds.includes(taskId) ? (
    <Grid container direction="column" style={{}}>
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <Grid
        component={CardContent}
        style={{ padding: '2rem 4rem' }}
        container
        direction="row"
        justify="space-between"
        // wrap="nowrap"
      >
        <Grid item md={7} xs={12}>
          <TaskDueDateForm taskId={taskId} />
          <TaskDescriptionForm taskId={taskId} />
          <CreateComment taskId={taskId} />
          <ActivityList taskId={taskId} />
        </Grid>
        <Grid item md={3} xs={12}>
          <List
            component="nav"
            subheader={
              <ListSubheader component="div" id="Task Actions">
                Task Actions{' '}
              </ListSubheader>
            }
          >
            <ListItem button onClick={onClick}>
              <ListItemIcon>
                <GoX />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
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
