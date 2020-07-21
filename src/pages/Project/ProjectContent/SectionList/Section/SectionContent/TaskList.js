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
  const taskList = useSelector(state => state.sections.sectionsList[sectionId].Tasks);

  return Object.values(taskList).map(task => (
    <Card key={task.id} elevation={4} className={classes.card}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>{task.title}</CardContent>
      </CardActionArea>
    </Card>
  ));
};

export default TaskList;
