import React, { Fragment, useEffect } from 'react';
import ProjectBackground from '../../components/Project/ProjectBackground';
import { Grid, makeStyles } from '@material-ui/core';
import ProjectNavbar from '../../components/Project/ProjectNavbar/ProjectNavbar';
import ProjectContent from '../../components/Project/ProjectContent/ProjectContent';
import { useDispatch } from 'react-redux';
import { fetchProjectData } from 'actions/projects';
import Task from './Task';
import { Route } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  projectPage: {
    height: '100vh',
  },
}));

const Project = ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProjectData(id));
  }, [dispatch, id]);

  return (
    <Fragment>
      <ProjectBackground />
      <Grid direction="column" wrap="nowrap" className={classes.projectPage} container>
        <ProjectNavbar projectId={id} />
        <ProjectContent projectId={id} />
        <Route path={`/project/:projectId/:sectionId/:taskId`} component={Task} />
      </Grid>
    </Fragment>
  );
};

export default Project;
