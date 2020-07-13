import React from 'react';
import PropTypes from 'prop-types';
import { Menu, makeStyles } from '@material-ui/core';
import EditProject from 'pages/Dashboard/ProjectList/ProjectItem/ProjectMenu/EditProject/EditProject';
import ProjectMenuButton from './ProjectMenuButton';
import DeleteProject from './DeleteProject';

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

const ProjectMenu = ({ project }) => {
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
      <Menu autoFocus anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <DeleteProject project={project} />
        <EditProject project={project} />
      </Menu>
    </div>
  );
};

ProjectMenu.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectMenu;
