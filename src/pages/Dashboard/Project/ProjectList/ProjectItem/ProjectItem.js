import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardHeader, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProjectMenu from './ProjectMenu/ProjectMenu';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const ProjectItem = ({ projectId }) => {
  const classes = useStyles();
  const project = useSelector(state => state.projects.projectList[projectId]);

  return (
    <Grid item>
      <Card className={classes.root}>
        <CardActionArea component={Link} to={`/project/${project.id}`}>
          <CardHeader
            title={project.title}
            subheader={project.accessibility ? 'public' : 'private'}
          />
        </CardActionArea>
        <ProjectMenu projectId={projectId} />
      </Card>
    </Grid>
  );
};

ProjectItem.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectItem;
