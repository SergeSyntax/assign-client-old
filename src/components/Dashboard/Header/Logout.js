import React, { forwardRef } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { userLogout } from 'actions/users';
import { MenuItem, ListItemIcon } from '@material-ui/core';

const Logout = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const onClick = e => {
    e.preventDefault();
    dispatch(userLogout());
  };

  return (
    <MenuItem {...props} innerRef={ref} onClick={onClick}>
      <ListItemIcon>
        <FiLogOut />
      </ListItemIcon>
      Logout
    </MenuItem>
  );
});

export default Logout;
