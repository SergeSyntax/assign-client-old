import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumbs, Chip, makeStyles, emphasize, CircularProgress } from '@material-ui/core';
import { GoHome } from 'react-icons/go';
import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProjectListMenu from './ProjectListMenu';
import { fetchProjects } from 'actions/projects';

const useStyles = makeStyles(theme => ({
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

const ProjectLocation = ({ projectId }) => {
  const dispatch = useDispatch();

  const project = useSelector(state => state.projects.projectList);
  const loadingProject = useSelector(state => state.projects.loadingProject);
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = event => {
    dispatch(fetchProjects());
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
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
            onClick={openMenu}
            className={classes.chip}
            label={project[[projectId]] ? project[[projectId]].title : ''}
            icon={<AiOutlineFolderOpen className={classes.icon} />}
            deleteIcon={<MdExpandMore className={classes.icon} />}
            onDelete={openMenu}
          />
        )}
      </Breadcrumbs>
      <ProjectListMenu projectId={projectId} anchorEl={anchorEl} closeMenu={closeMenu} />
    </Fragment>
  );
};

ProjectLocation.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default ProjectLocation;
