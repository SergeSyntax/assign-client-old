import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { FiFolderPlus } from 'react-icons/fi';

const CreateProjectButton = ({ handleClickOpen }) => {
  return (
    <IconButton color="primary" onClick={handleClickOpen}>
      <FiFolderPlus />
    </IconButton>
  );
};

CreateProjectButton.propTypes = {
  handleClickOpen: PropTypes.func.isRequired,
};

export default CreateProjectButton;
