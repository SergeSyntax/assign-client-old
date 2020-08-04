import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Grid, makeStyles } from '@material-ui/core';
import TaskTitleForm from './TaskTitleForm/TaskTitleForm';
import CloseTaskButton from './CloseTaskButton';

const useStyles = makeStyles(theme => ({
  taskWrapper: { paddingBottom: 0 },
}));

const TaskHeader = ({ taskId, handleClose }) => {
  const classes = useStyles();
  return (
    <DialogTitle className={classes.taskWrapper}>
      <Grid container justify="space-between" alignItems="flex-start" wrap="nowrap">
        <TaskTitleForm taskId={taskId} />
        <CloseTaskButton onClick={handleClose} />
      </Grid>
    </DialogTitle>
  );
};

TaskHeader.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskHeader;
