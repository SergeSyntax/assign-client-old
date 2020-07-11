import React, { Fragment, useEffect } from 'react';
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
  CircularProgress,
} from '@material-ui/core';
import Logo from 'components/shared/Logo/Logo';
import { TiThMenu } from 'react-icons/ti';
import { GoHome } from 'react-icons/go';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProject } from 'actions/projects';

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
  chip: {
    backgroundColor: 'rgba(0%,0%,50%,.1)',
    height: theme.spacing(3),
    fontWeight: theme.typography.fontWeightMedium,
    color: 'inherit',
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
  loadProjectSpinner: {
    marginLeft: '1rem',
  },
}));

const Project = ({
  match: {
    params: { id },
  },
}) => {
  const project = useSelector(state => state.projects.projectList[id]);
  console.log(project);
  const loadingProject = useSelector(state => state.projects.loadingProject);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProject(id));
  }, [dispatch, id]);
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
                    className={classes.chip}
                    to="/"
                    label="Dashboard"
                    icon={<GoHome className={classes.icon} />}
                  />
                  <Chip
                    component={Link}
                    className={classes.chip}
                    to="/projects"
                    label="Projects"
                    icon={<AiOutlineFolder className={classes.icon} />}
                  />
                  {loadingProject ? (
                    <CircularProgress color="inherit" size={15} className={classes.loadProjectSpinner} />
                  ) : (
                    <Chip
                      className={classes.chip}
                      label={project ? project.title : ''}
                      icon={<AiOutlineFolderOpen className={classes.icon} />}
                      deleteIcon={<MdExpandMore className={classes.icon} />}
                      onDelete={alert}
                    />
                  )}
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
