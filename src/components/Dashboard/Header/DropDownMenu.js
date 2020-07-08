import React, { Fragment } from 'react';
import { IconButton, MenuItem, Menu, ListItemIcon, makeStyles } from '@material-ui/core';
import { MdArrowDropDown } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { userLogout } from 'actions/users';

const DropDownMenu = () => {
  const useStyle = makeStyles(theme => ({
    dropDownMenuButton: {
      color: '#fff',
      fontSize: '3rem',
      padding: theme.spacing(1),
    },
  }));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();
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
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem
          onClick={e => {
            e.preventDefault();
            dispatch(userLogout());
          }}
        >
          <ListItemIcon style={{ width: 'auto' }}>
            <FiLogOut />
          </ListItemIcon>{' '}
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default DropDownMenu;
