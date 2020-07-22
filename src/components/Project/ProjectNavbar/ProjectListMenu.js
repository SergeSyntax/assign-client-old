import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, makeStyles, LinearProgress } from '@material-ui/core';
import { useSelector, shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  menu: {
    '& .MuiPaper-root': {
      marginTop: '.6rem',
      backgroundColor: 'hsla(206, 100%, 79%,.64)',
      color: '#fff',
    },
  },
  loading: {
    background: 'transparent',
    height: 2,
    '& .MuiLinearProgress-barColorPrimary': {
      background: '#fff',
    },
  },
}));

const ProjectListMenu = ({ anchorEl, closeMenu, projectId }) => {
  const classes = useStyles();

  const projects = useSelector(state => state.projects.projectList, shallowEqual);
  const loadingProjects = useSelector(state => state.projects.loadingProjects);

  return (
    <Menu
      className={classes.menu}
      anchorEl={anchorEl}
      getContentAnchorEl={null}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={Boolean(anchorEl)}
      onClose={closeMenu}
    >
      {loadingProjects && <LinearProgress variant="indeterminate" className={classes.loading} />}

      {Object.values(projects).map(project => (
        <MenuItem
          style={{ visibility: loadingProjects ? 'hidden' : 'visible' }}
          onClick={closeMenu}
          component={Link}
          to={`/project/${project.id}`}
          disabled={projectId === project.id}
          key={project.id}
        >
          {project.title}
        </MenuItem>
      ))}
    </Menu>
  );
};

ProjectListMenu.propTypes = {
  projectId: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
  anchorEl: PropTypes.any,
};

export default ProjectListMenu;
