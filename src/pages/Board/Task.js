import React from 'react';
import PropTypes from 'prop-types';
import { Dialog, useTheme, useMediaQuery } from '@material-ui/core';
import { useSelector } from 'react-redux';
import TaskContent from './Task/TaskContent';

const Task = ({
  match: {
    params: { projectId, taskId },
  },
  history,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const loadingTasks = useSelector(state => state.tasks.loadingTasks);
  const handleClose = () => {
    history.push(`/project/${projectId}`);
  };
  return (
    <Dialog maxWidth="md" fullWidth fullScreen={fullScreen} open={true} onClose={handleClose}>
      {loadingTasks ? (
        <div>loading</div>
      ) : (
        <TaskContent taskId={taskId} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

Task.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Task;
