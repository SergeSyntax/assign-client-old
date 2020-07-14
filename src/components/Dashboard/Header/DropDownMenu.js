import React, { Fragment } from 'react';
import { IconButton, MenuItem, Menu, ListItemIcon, makeStyles } from '@material-ui/core';
import { MdArrowDropDown } from 'react-icons/md';
import Logout from './Logout';

const DropDownMenu = () => {
  const useStyle = makeStyles(theme => ({
    dropDownMenuButton: {
      color: '#fff',
      fontSize: '3rem',
      padding: theme.spacing(1),
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyle();

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
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Logout />
      </Menu>
    </Fragment>
  );
};

export default DropDownMenu;
