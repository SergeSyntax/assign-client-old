import React from 'react';
import { Card, CardActionArea, CardContent, makeStyles } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

const useStyles = makeStyles({
  card: { margin: '1rem', flexShrink: '0' },
  cardContent: {
    wordBreak: 'break-word',
  },
});

const TaskList = ({ sectionId }) => {
  const classes = useStyles();
  const taskList = useSelector(state => state.tasks.taskList);
  const { id: projectId } = useParams();

  return Object.values(taskList)
    .filter(task => task.sectionId === sectionId)
    .map(task => (
      <Card
        component={Link}
        to={`/project/${projectId}/${sectionId}/${task.id}`}
        key={task.id}
        elevation={4}
        className={classes.card}
      >
        <CardActionArea>
          <CardContent className={classes.cardContent}>{task.title}</CardContent>
        </CardActionArea>
      </Card>
    ));
};

export default TaskList;
