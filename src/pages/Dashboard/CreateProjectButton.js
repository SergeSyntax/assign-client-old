import React from 'react';
import { IconButton } from '@material-ui/core';
import { FiFolderPlus } from 'react-icons/fi';

const CreateProjectButton = ({ handleClickOpen }) => {
  return (
    <IconButton color="primary" onClick={handleClickOpen}>
      <FiFolderPlus />
    </IconButton>
  );
};

export default CreateProjectButton;
