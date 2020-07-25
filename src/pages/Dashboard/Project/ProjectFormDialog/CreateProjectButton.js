import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import { FiFolderPlus } from 'react-icons/fi';

const CreateProjectButton = ({ handleClickOpen }) => {
  return (
    <Tooltip title="Create Project">
      <IconButton color="primary" onClick={handleClickOpen}>
        <FiFolderPlus />
      </IconButton>
    </Tooltip>
  );
};

CreateProjectButton.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
};

export default CreateProjectButton;
