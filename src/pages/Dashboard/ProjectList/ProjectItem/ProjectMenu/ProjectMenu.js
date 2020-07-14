import React, { Fragment, useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Menu, makeStyles, Dialog } from '@material-ui/core';
import ProjectMenuButton from './ProjectMenuButton';
import { editProject } from 'actions/projects';
import ProjectFormDialog from 'pages/Dashboard/ProjectFormDialog/ProjectFormDialog';
import { useDispatch, useSelector } from 'react-redux';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { GoPencil, GoX } from 'react-icons/go';

import _ from 'lodash';
import EditProjectButton from './EditProject/EditProjectButton';
import EditProject from './EditProject/EditProject';
import DeleteButton from './DeleteProject/DeleteButton';
import DeleteProject from './DeleteProject/DeleteProject';

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
  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const [openEdit, setOpenEdit] = useState(false);

  const openEditDialog = () => {
    setAnchorEl(null);
    setOpenEdit(true);
  };

  const [openDelete, setOpenDelete] = useState(false);

  const openDeleteDialog = () => {
    setAnchorEl(null);
    setOpenDelete(true);
  };

  return (
    <div className={classes.menu}>
      <ProjectMenuButton handleClick={openMenu} />
      <Menu
        autoFocus
        disableEnforceFocus
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <EditProjectButton onClick={openEditDialog} />
        <DeleteButton onClick={openDeleteDialog} />
      </Menu>
      <EditProject open={openEdit} setOpen={setOpenEdit} project={project} />
      <DeleteProject project={project} open={openDelete} setOpen={setOpenDelete} />
    </div>
  );
};

ProjectMenu.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectMenu;
