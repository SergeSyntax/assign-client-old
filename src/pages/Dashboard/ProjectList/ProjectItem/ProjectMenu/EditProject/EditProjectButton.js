import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { GoPencil } from 'react-icons/go';

const EditProjectButton = ({ handleClickOpen }) => {
  return (
    <MenuItem onClick={handleClickOpen}>
      <ListItemIcon>
        <GoPencil />
      </ListItemIcon>
      Edit
    </MenuItem>
  );
};

EditProjectButton.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
};

export default EditProjectButton;
