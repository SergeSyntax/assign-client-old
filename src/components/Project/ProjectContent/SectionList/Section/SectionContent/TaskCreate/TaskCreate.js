import React, { useRef, useEffect } from 'react';
import { ClickAwayListener, Card, CardContent, makeStyles } from '@material-ui/core';

import TaskCreateForm from './TaskCreateForm';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  card: { margin: '1rem', flexShrink: '0', padding: '0 1rem' },
  cardContent: { padding: '1rem' },
}));

const TaskCreate = ({ sectionId, handleClose, savingInProgress }) => {
  const classes = useStyles();
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <TaskCreateForm
            ref={ref}
            savingInProgress={savingInProgress}
            sectionId={sectionId}
            handleClose={handleClose}
          />
        </CardContent>
      </Card>
    </ClickAwayListener>
  );
};

TaskCreate.prototype = {
  sectionId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
  savingInProgress: PropTypes.bool.isRequired,
};

export default TaskCreate;
