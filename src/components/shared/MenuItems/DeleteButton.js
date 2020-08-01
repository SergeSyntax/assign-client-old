import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { GoX } from 'react-icons/go';

const DeleteButton = forwardRef((props, ref) => {
  return (
    <MenuItem {...props} innerRef={ref}>
      <ListItemIcon>
        <GoX />
      </ListItemIcon>
      Delete
    </MenuItem>
  );
});

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
