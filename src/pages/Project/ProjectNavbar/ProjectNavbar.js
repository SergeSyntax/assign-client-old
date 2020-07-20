import React, { useEffect } from 'react';
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
import PropTypes from 'prop-types';
import NavbarMenu from 'components/shared/NavbarMenu/NavbarMenu';

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

const ProjectNavbar = ({ projectId }) => {
  const project = useSelector(state => state.projects.projectList[projectId]);
  const loadingProject = useSelector(state => state.projects.loadingProject);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProject(projectId));
  }, [dispatch, projectId]);
  const classes = useStyles();

  return (
    <Grid component={AppBar} item className={classes.header} position="static">
      <Grid component={Toolbar} container direction="column">
        <Grid className={classes.headerToolBar} container>
          <Logo />
          <NavbarMenu />{' '}
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
    </Grid>
  );
};

ProjectNavbar.prototype = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectNavbar;
