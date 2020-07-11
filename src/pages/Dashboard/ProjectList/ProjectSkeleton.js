import React, { Fragment } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  loading: {
    height: '10rem',
    margin: '8px',
  },
}));

const ProjectSkeleton = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Skeleton className={classes.loading} variant="rect" animation="wave" />
      <Skeleton className={classes.loading} variant="rect" animation="wave" />
      <Skeleton className={classes.loading} variant="rect" animation="wave" />
      <Skeleton className={classes.loading} variant="rect" animation="wave" />
      <Skeleton className={classes.loading} variant="rect" animation="wave" />
    </Fragment>
  );
};

export default ProjectSkeleton;
