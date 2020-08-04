import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, ListItemIcon } from '@material-ui/core';
import { GoPencil } from 'react-icons/go';

const EditProjectButton = forwardRef((props, ref) => {
  return (
    <MenuItem {...props} innerRef={ref}>
      <ListItemIcon>
        <GoPencil />
      </ListItemIcon>
      Edit
    </MenuItem>
  );
});

EditProjectButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditProjectButton;
