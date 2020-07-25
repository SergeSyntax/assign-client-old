import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  card: { margin: '1rem', flexShrink: '0' },
  cardContent: {
    wordWrap: 'break-word',
  },
});

const TaskList = ({ sectionId }) => {
  const classes = useStyles();
  const taskList = useSelector(state => state.tasks.taskList);

  return Object.values(taskList)
    .filter(task => task.sectionId === sectionId)
    .map(task => (
      <Card key={task.id} elevation={4} className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.cardContent}>{task.title}</CardContent>
        </CardActionArea>
      </Card>
    ));
};

export default TaskList;
