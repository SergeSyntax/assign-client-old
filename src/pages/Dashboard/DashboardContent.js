import React, { Fragment } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  TextField,
  IconButton,
  Card,
  CardHeader,
} from '@material-ui/core';
import { FiSearch, FiSettings } from 'react-icons/fi';
import CreateProject from './CreateProject';
import { GoKebabVertical } from 'react-icons/go';
import ProjectList from './ProjectList';

const useStyle = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
  },
  gridRoot: {
    flex: 1,
  },
  projectHeader: {
    padding: theme.spacing(2),
  },
  projectTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
}));

const DashboardContent = () => {
  const classes = useStyle();

  return (
    <Fragment>
      <Grid
        className={classes.projectHeader}
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography className={classes.projectTitle}>Projects</Typography>
      </Grid>
      <Divider orientation="horizontal" />

      <Grid
        className={classes.projectHeader}
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <TextField label="search" variant="outlined" />{' '}
        <IconButton color="primary">
          <FiSearch />
        </IconButton>{' '}
        <IconButton color="primary">
          <FiSettings />
        </IconButton>{' '}
        <CreateProject />
      </Grid>
      <ProjectList />
    </Fragment>
  );
};

export default DashboardContent;
