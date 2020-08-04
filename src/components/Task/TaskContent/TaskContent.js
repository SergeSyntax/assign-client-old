import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  List,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardContent,
  makeStyles,
} from '@material-ui/core';

import TaskHeader from './TaskHeader/TaskHeader';
import TaskDescriptionForm from './TaskDescriptionForm/TaskDescriptionForm';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CreateComment from './TaskActivity/CreateComment';
import ActivityList from './TaskActivity/ActivityList';
import { GoX } from 'react-icons/go';
import { deleteTask } from 'actions/tasks';
import TaskDueDateForm from './TaskDueDateForm/TaskDueDateForm';

const useStyles = makeStyles(theme => ({
  cardContent: { padding: '2rem 4rem', marginBottom: '2rem' },
}));

const TaskContent = ({ taskId, handleClose, projectId }) => {
  const taskIds = useSelector(state => state.tasks.taskIds);
  const dispatch = useDispatch();
  const classes = useStyles();

  const onClick = () => {
    handleClose();
    dispatch(deleteTask(taskId));
  };

  return taskIds.includes(taskId) ? (
    <Grid container direction="column">
      <TaskHeader taskId={taskId} handleClose={handleClose} />
      <Grid
        component={CardContent}
        className={classes.cardContent}
        container
        direction="row"
        justify="space-between"
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
