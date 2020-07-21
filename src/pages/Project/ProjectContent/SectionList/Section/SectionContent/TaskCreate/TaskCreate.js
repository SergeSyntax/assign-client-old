import React, { useRef, useEffect } from 'react';
import { ClickAwayListener, Card, CardContent } from '@material-ui/core';

import TaskCreateForm from './TaskCreateForm';
import PropTypes from 'prop-types';

const TaskCreate = ({ sectionId, handleClose }) => {
  const ref = useRef();

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Card style={{ margin: '1rem', flexShrink: '0', padding: '0 1rem' }}>
        <CardContent style={{ padding: '1rem' }}>
          <TaskCreateForm ref={ref} sectionId={sectionId} handleClose={handleClose} />
        </CardContent>
      </Card>
    </ClickAwayListener>
  );
};

TaskCreate.prototype = {
  sectionId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskCreate;
