import React, { Fragment } from 'react';
import ProjectBackground from './ProjectBackground';
import { Grid, makeStyles, Card, IconButton, Typography } from '@material-ui/core';
import './Project.scss';

import ProjectNavbar from './ProjectNavbar';
import { GoKebabHorizontal } from 'react-icons/go';

const useStyle = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  content: {
    height: '87%',
  },
  container: {
    height: '100%',
    '&::-webkit-scrollbar': {
      height: '12px',
      width: '12px',
    },
    '&::-webkit-scrollbar-button': {
      display: 'block',
      height: '4px',
      width: '4px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(0,0,0,.1)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: 'rgba(253, 253, 253)',
    },

    // // }

    // background: 'red',
    overflowX: 'auto',
    // margin: '0 1rem 1rem',
    margin: '2rem 1rem',
  },

  section: {
    padding: '.3rem',
    minWidth: '25rem',
    height: '100%',
    background: '#EBECF0',
  },

  sectionHeader: {
    padding: '.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontWeight: 'bold',
  },
  sectionMenuButton: {
    padding: '.6rem',
    borderRadius: '.6rem',
  },
  sectionContent: {
    height: '100%',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
      height: '8px',
      width: '8px',
    },
    '&::-webkit-scrollbar-button': {
      display: 'block',
      height: '4px',
      width: '4px',
    },
    '&::-webkit-scrollbar-track-piece': {
      background: 'rgba(9,30,66,.08)',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#BFC2CE',
    },
  },
  task: {
    display: 'flex',
    margin:'1rem'
  },
}));

const Project = ({
  match: {
    params: { id },
  },
}) => {
  const classes = useStyle();

  return (
    <Fragment>
      <ProjectBackground />
      <Grid direction="column" wrap="nowrap" className={classes.root} container>
        <Grid item>
          <ProjectNavbar projectId={id} />
        </Grid>
        <Grid item container wrap="nowrap" className={classes.content}>
          <Grid
            direction="row"
            justify="flex-start"
            alignItems="stretch"
            wrap="nowrap"
            container
            className={classes.container}
          >
            <Grid component={Card} className={classes.section} item>
              <div className={classes.sectionHeader}>
                <Typography className={classes.sectionTitle}>Backlog </Typography>
                <IconButton className={classes.sectionMenuButton} size="small">
                  <GoKebabHorizontal />
                </IconButton>
              </div>
              <Grid wrap="nowrap" container direction="column" className={classes.sectionContent}>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>{' '}
                <Card className={classes.task}>test</Card>
                <Card className={classes.task}>test</Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Project;
