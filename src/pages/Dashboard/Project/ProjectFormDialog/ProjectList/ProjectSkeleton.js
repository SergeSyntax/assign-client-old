import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  loading: {
    height: '10rem',
    margin: '8px',
  },
}));

const calculateProjectSkeletonUnits = () =>
  Math.abs(Number.parseInt((window.innerHeight - 369) / 138)) + 2;

const ProjectSkeleton = () => {
  const classes = useStyles();

  return _.times(calculateProjectSkeletonUnits(), i => (
    <Skeleton key={i} className={classes.loading} variant="rect" animation="wave" />
  ));
};

export default ProjectSkeleton;
