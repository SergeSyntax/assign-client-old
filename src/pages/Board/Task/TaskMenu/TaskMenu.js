import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import { Menu, makeStyles } from '@material-ui/core';
import DeleteButton from 'components/shared/MenuItems/DeleteButton';
import { deleteTask } from 'actions/tasks';

const TaskMenu = ({ taskId, handleClose }) => {
  const dispatch = useDispatch();

  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = event => {
    setAnchorEl(event.currentTarget);
  };
  const closeMenu = () => {
    setAnchorEl(null);
  };

  const onClick = () => {
    handleClose();
    dispatch(deleteTask(taskId));
  };

  return (
    <Fragment>
      <MenuIconButton style={{ marginRight: '1rem' }} onClick={openMenu} />
      <Menu autoFocus anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={closeMenu}>
        <DeleteButton onClick={onClick} />
      </Menu>
    </Fragment>
  );
};

TaskMenu.propTypes = {
  taskId: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default TaskMenu;
