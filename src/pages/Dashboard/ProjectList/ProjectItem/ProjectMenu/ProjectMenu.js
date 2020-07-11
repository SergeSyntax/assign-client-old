import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, Menu, ListItemIcon, makeStyles } from '@material-ui/core';
import EditProject from 'pages/Dashboard/ProjectList/ProjectItem/ProjectMenu/EditProject';
import { GoX } from 'react-icons/go';
import ProjectMenuButton from './ProjectMenuButton';

const ProjectMenu = ({ project }) => {
  const useStyles = makeStyles(theme => ({
    menu: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: '10rem',
      borderBottomLeftRadius: '10rem',
      padding: '1rem',
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.menu}>
      <ProjectMenuButton handleClick={handleClick} />
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={e => {
            e.preventDefault();
          }}
        >
          <ListItemIcon>
            <GoX />
          </ListItemIcon>
          Delete
        </MenuItem>
        <EditProject project={project} />
      </Menu>
    </div>
  );
};

ProjectMenu.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectMenu;
