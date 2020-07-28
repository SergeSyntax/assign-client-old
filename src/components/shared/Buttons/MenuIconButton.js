import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import { GoKebabHorizontal } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  menuIconButton: { padding: '.7rem', borderRadius: '.6rem' },
}));

const MenuIconButton = ({ onClick, iconClassName, ...rest }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.menuIconButton} size="small" onClick={onClick} {...rest}>
      <GoKebabHorizontal className={iconClassName} />
    </IconButton>
  );
};

MenuIconButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
};

export default MenuIconButton;
