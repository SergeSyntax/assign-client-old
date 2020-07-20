import React from 'react';
import { Card, CardActionArea, CardContent } from '@material-ui/core';
import _ from 'lodash';
import { useSelector } from 'react-redux';

const TaskList = ({ sectionId }) => {
  const taskList = useSelector(state => state.sections.sectionsList[sectionId].Tasks);

  return Object.values(taskList).map(task => (
    <Card key={task.id} elevation={4} style={{ margin: '1rem', flexShrink: '0' }}>
      <CardActionArea>
        <CardContent>{`Task ${task.title}`}</CardContent>
      </CardActionArea>
    </Card>
  ));
};

export default TaskList;
