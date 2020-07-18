import React, { Fragment } from 'react';
import ProjectBackground from './ProjectBackground';
import { Grid, makeStyles } from '@material-ui/core';
import ProjectNavbar from './ProjectNavbar/ProjectNavbar';
import ProjectContent from './ProjectContent/ProjectContent';
import './Project.scss';

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

  return (
    <Fragment>
      <ProjectBackground />
      <Grid direction="column" wrap="nowrap" className={classes.projectPage} container>
        <ProjectNavbar projectId={id} />
        <ProjectContent id={id} />
      </Grid>
    </Fragment>
  );
};

export default Project;
