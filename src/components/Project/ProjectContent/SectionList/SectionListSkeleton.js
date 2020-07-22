import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, makeStyles, Card } from '@material-ui/core';
import _ from 'lodash';

const useStyles = makeStyles(theme => ({
  section: {
    background: '#EBECF0',
    height: '96%',
    // minWidth: '20rem',
    flexShrink: '0',
    margin: '1rem 0',
    '&:not(:last-child)': {
      marginRight: '1rem',
    },
  },
}));

const calculateTaskSkeletonUnits = () =>
  Math.abs(Number.parseInt((window.innerHeight - 265) / 112)) + 2;

const SectionListSkeleton = () => {
  const classes = useStyles();
  // return <div>test</div>;
  return _.times(6, i => (
    <Grid
      item
      xs={11}
      sm={4}
      md={3}
      lg={2}
      container
      spacing={2}
      wrap="nowrap"
      direction="column"
      component={Card}
      className={classes.section}
      key={i}
    >
      <Grid item container justify="space-between" alignItems="center">
        <Skeleton variant="text" height={5} width={140} />
        <Skeleton variant="circle" height={20} width={20} />
      </Grid>
      {_.times(calculateTaskSkeletonUnits(), j => (
        <Grid item key={j}>
          {' '}
          <Skeleton variant="rect" height={90} />
        </Grid>
      ))}
    </Grid>
  ));
};

export default SectionListSkeleton;
