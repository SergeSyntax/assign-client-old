import React, { Fragment } from 'react';
import {
  makeStyles,
  Grid,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from '@material-ui/core';
import { FiSearch } from 'react-icons/fi';
import CreateProject from './Project/ProjectFormDialog/CreateProject';
import ProjectList from './Project/ProjectFormDialog/ProjectList/ProjectList';

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    display: 'flex',
  },
  gridRoot: {
    flex: 1,
  },
  projectHeader: {
    padding: theme.spacing(2),
    paddingLeft: 0,
  },
  projectTitle: {
    fontWeight: 500,
    fontSize: '2rem',
    textTransform: 'capitalize',
  },
  titleIcon: { marginRight: '1rem', fontSize: '2.3rem', color: theme.palette.primary.main },
}));

const DashboardContent = () => {
  const classes = useStyles();

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
        justify="space-between"
        alignItems="center"
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment style={{ marginLeft: '.8rem' }} position="start">
                <FiSearch color="primary" className={classes.titleIcon} />
              </InputAdornment>
            ),
          }}
          label="search"
          variant="outlined"
        />
        <CreateProject />
      </Grid>
      <ProjectList />
    </Fragment>
  );
};

export default DashboardContent;
