import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, makeStyles } from '@material-ui/core';
import ProjectMenuButton from './ProjectMenuButton';

// import _ from 'lodash';
import EditProjectButton from './EditProject/EditProjectButton';
import EditProject from './EditProject/EditProject';
import DeleteButton from './DeleteProject/DeleteButton';
import ProjectDelete from './DeleteProject/ProjectDelete';

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

  // Menu state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  // Edit dialog state
  const [openEdit, setOpenEdit] = useState(false);
  const openEditDialog = () => {
    setAnchorEl(null);
    setOpenEdit(true);
  };

  // Delete dialog state
  const [openDelete, setOpenDelete] = useState(false);
  const openDeleteDialog = () => {
    setAnchorEl(null);
    setOpenDelete(true);
  };

  return (
    <div className={classes.menu}>
      <ProjectMenuButton handleClick={openMenu} />
      <Menu autoFocus anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        <EditProjectButton onClick={openEditDialog} />
        <DeleteButton onClick={openDeleteDialog} />
      </Menu>
      <EditProject open={openEdit} setOpen={setOpenEdit} project={project} />
      <ProjectDelete project={project} open={openDelete} setOpen={setOpenDelete} />
    </div>
  );
};

ProjectMenu.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectMenu;
