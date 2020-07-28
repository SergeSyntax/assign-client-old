import React from 'react';
import PropTypes from 'prop-types';
import { DialogTitle, Grid, makeStyles } from '@material-ui/core';
import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import CancelIconButton from 'components/shared/Buttons/CancelIconButton';

import TaskTitleForm from './TaskTitleForm/TaskTitleForm';

const TaskHeader = ({ taskId, handleClose }) => {
  const useStyles = makeStyles(theme => ({
    taskOptions: { marginLeft: '1rem', display: 'inline-flex', paddingTop: '.5rem' },
  }));

  const classes = useStyles();
  return (
    <DialogTitle>
      <Grid container justify="space-between" alignItems="flex-start" wrap="nowrap">
        <TaskTitleForm taskId={taskId} />
        <Grid item className={classes.taskOptions}>
          <MenuIconButton
            style={{ marginRight: '1rem' }}
            onClick={() => {
              console.error('not working');
            }}
          />
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
