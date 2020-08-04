import React, { Fragment, useState } from 'react';
import { IconButton, Menu, makeStyles } from '@material-ui/core';
import { MdArrowDropDown } from 'react-icons/md';
import Logout from './Logout';

const useStyles = makeStyles(theme => ({
  dropDownMenuButton: {
    color: '#fff',
    fontSize: '3rem',
    padding: theme.spacing(1),
  },
}));

const DropDownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Fragment>
      <IconButton onClick={handleClick} className={classes.dropDownMenuButton}>
        <MdArrowDropDown />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Logout />
      </Menu>
    </Fragment>
  );
};

export default DropDownMenu;
