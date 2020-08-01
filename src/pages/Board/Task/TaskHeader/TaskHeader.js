import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Grid, makeStyles } from '@material-ui/core';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import CancelIconButton from 'components/shared/Buttons/CancelIconButton';

import TaskTitleForm from './TaskTitleForm/TaskTitleForm';
import TaskMenu from './TaskMenu/TaskMenu';

const TaskHeader = ({ taskId, handleClose }) => {
  const useStyles = makeStyles(theme => ({
    taskWrapper: { paddingBottom: 0 },
    taskOptions: { marginLeft: '4rem', display: 'inline-flex', paddingTop: '.5rem' },
  }));

  const classes = useStyles();
  return (
    <DialogTitle className={classes.taskWrapper}>
      <Grid container justify="space-between" alignItems="flex-start" wrap="nowrap">
        <TaskTitleForm taskId={taskId} />
        <Grid item className={classes.taskOptions}>
          <TaskMenu taskId={taskId} handleClose={handleClose} />
          <CancelIconButton onClick={handleClose} />
        </Grid>
      </Grid>
    </DialogTitle>
  );
};

TaskHeader.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskHeader;
