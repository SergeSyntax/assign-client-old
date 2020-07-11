import React, { Fragment } from 'react';
import ProjectBackground from './ProjectBackground';
import {
  Grid,
  AppBar,
  Toolbar,
  makeStyles,
  IconButton,
  Breadcrumbs,
  Chip,
  emphasize,
} from '@material-ui/core';
import Logo from 'components/shared/Logo/Logo';
import { TiThMenu, TiPlus } from 'react-icons/ti';
import { GoHome } from 'react-icons/go';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
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
  breadcrumbs: {
    color: '#fff',
  },
  root: {
    backgroundColor: 'rgba(0%,0%,50%,.1)',
    height: theme.spacing(3),
    fontWeight: theme.typography.fontWeightMedium,
    color:'inherit',
    '&:hover, &:focus': {
      backgroundColor: 'rgba(0%,0%,50%,.2)',
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize('rgba(0%,0%,50%,.2)', 0.12),
    },
  },
  icon: {
    color: 'inherit',
    display: 'inline',
  },
}));

const Project = ({
  match: {
    params: { id },
  },
}) => {
  const project = useSelector(state => state.projects.projects[id]);

  console.log(id, project);
  const classes = useStyle();

  return (
    <Fragment>
      <ProjectBackground />
      <Grid container>
        <AppBar className={classes.header} position="relative">
          <Toolbar>
            <Grid container direction="column">
              <Grid className={classes.headerToolBar} container>
                <Logo />
                <IconButton>
                  <TiThMenu />
                </IconButton>
              </Grid>
              <Grid className={classes.headerToolBar} container>
                <Breadcrumbs className={classes.breadcrumbs} aria-label="breadcrumb">
                  <Chip
                    component={Link}
                    className={classes.root}
                    to="/"
                    label="Dashboard"
                    icon={<GoHome className={classes.icon} />}
                  />
                  <Chip
                    component={Link}
                    className={classes.root}
                    to="/projects"
                    label="Projects"
                    icon={<AiOutlineFolder className={classes.icon} />}
                  />
                  <Chip
                    className={classes.root}
                    label={project ? project.title : 'test'}
                    icon={<AiOutlineFolderOpen className={classes.icon} />}
                    deleteIcon={<MdExpandMore className={classes.icon} />}
                    onDelete={alert}
                  />
                </Breadcrumbs>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </Fragment>
  );
};

export default Project;
