import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import MenuIconButton from 'components/shared/Buttons/MenuIconButton';
import { Menu } from '@material-ui/core';
import DeleteButton from 'components/shared/MenuItems/DeleteButton';
import { deleteTask } from 'actions/tasks';
import usePopup from 'hooks/usePopup';

const TaskMenu = ({ taskId, handleClose }) => {
  const dispatch = useDispatch();

  // Menu state
  const [menu, setMenuEle] = usePopup();

  const onClick = () => {
    handleClose();
    dispatch(deleteTask(taskId));
  };

  return (
    <Fragment>
      <MenuIconButton
        style={{ marginRight: '1rem' }}
        onClick={event => setMenuEle(event.currentTarget)}
      />
      <Menu autoFocus anchorEl={menu.anchorEl} open={menu.open} onClose={() => setMenuEle(null)}>
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
