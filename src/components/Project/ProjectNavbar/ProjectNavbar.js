import React from 'react';
import { Grid, AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'components/shared/Logo/Logo';
import PropTypes from 'prop-types';
import NavbarMenu from 'components/shared/NavbarMenu/NavbarMenu';
import ProjectLocation from './ProjectLocation';

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: 'hsla(0,0%,100%,.24)',
  },
  headerToolBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: '.4rem',
  },
}));

const ProjectNavbar = ({ projectId }) => {
  const classes = useStyles();

  return (
    <Grid component={AppBar} item className={classes.header} position="static">
      <Grid component={Toolbar} container direction="column">
        <Grid className={classes.headerToolBar} container>
          <Logo />
          <NavbarMenu />
        </Grid>
        <Grid className={classes.headerToolBar} container>
          <ProjectLocation projectId={projectId} />
        </Grid>
      </Grid>
    </Grid>
  );
};

ProjectNavbar.prototype = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectNavbar;
