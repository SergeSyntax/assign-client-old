import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { GoKebabVertical } from 'react-icons/go';

const ProjectMenuButton = ({ handleClick }) => {
  return (
    <IconButton onClick={handleClick}>
      <GoKebabVertical />
    </IconButton>
  );
};

ProjectMenuButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ProjectMenuButton;
