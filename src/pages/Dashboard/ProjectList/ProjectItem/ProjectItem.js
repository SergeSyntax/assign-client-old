import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardActionArea, CardHeader, Grid, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProjectMenu from './ProjectMenu/ProjectMenu';

const useStyle = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

const ProjectItem = ({ project }) => {
  const classes = useStyle();

  return (
    <Grid item key={project.id}>
      <Card className={classes.root}>
        <CardActionArea component={Link} to={`/project/${project.id}`}>
          <CardHeader
            title={project.title}
            subheader={project.accessibility ? 'public' : 'private'}
          />
        </CardActionArea>
        <ProjectMenu project={project} />
      </Card>
    </Grid>
  );
};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
