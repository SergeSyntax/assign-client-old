import React, { useEffect, Fragment } from 'react';
import { Grid, CardHeader, IconButton, Card, CardActionArea, makeStyles } from '@material-ui/core';
import { GoKebabVertical } from 'react-icons/go';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchProjects } from 'actions/projects';
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: '10rem',
    borderBottomLeftRadius: '10rem',
    padding: '1rem',
  },

  loading: {
    // margin: '0 auto',
    height: '10rem',
    margin: '8px',
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projectList, shallowEqual);
  const loadingProjects = useSelector(state => state.projects.loadingProjects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  return (
    <Grid item container direction="column" spacing={2}>
      {loadingProjects ? (
        <Fragment>
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
          <Skeleton className={classes.loading} variant="rect" animation="wave" />
        </Fragment>
      ) : (
        <Fragment>
          {' '}
          {Object.values(projects).map(project => (
            <Grid item key={project.id}>
              <Card component={Link} to={`/project/${project.id}`} className={classes.root}>
                <CardActionArea>
                  <CardHeader
                    title={project.title}
                    subheader={project.accessibility ? 'public' : 'private'}
                  />
                </CardActionArea>
                <div className={classes.menu}>
                  <IconButton>
                    <GoKebabVertical />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))}
        </Fragment>
      )}
    </Grid>
  );
};

export default ProjectList;
