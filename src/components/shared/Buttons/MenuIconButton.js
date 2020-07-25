import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import { GoKebabHorizontal } from 'react-icons/go';

const useStyles = makeStyles(theme => ({
  menuIconButton: { padding: '.7rem', borderRadius: '.6rem' },
}));

const MenuIconButton = ({ handleClose, iconClassName, ...rest }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.menuIconButton} size="small" onClick={handleClose} {...rest}>
      <GoKebabHorizontal className={iconClassName} />
    </IconButton>
  );
};

MenuIconButton.propTypes = {
  handleClose: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
};

export default MenuIconButton;
