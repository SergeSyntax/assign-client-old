import React, { Fragment } from 'react';
import { IconButton, Menu, makeStyles } from '@material-ui/core';
import { MdArrowDropDown } from 'react-icons/md';
import Logout from './Logout';
import usePopup from 'hooks/usePopup';

const useStyles = makeStyles(theme => ({
  dropDownMenuButton: {
    color: '#fff',
    fontSize: '3rem',
    padding: theme.spacing(1),
  },
}));

const DropDownMenu = () => {
  const [menu, setMenuEle] = usePopup();
  const classes = useStyles();

  return (
    <Fragment>
      <IconButton
        onClick={event => setMenuEle(event.currentTarget)}
        className={classes.dropDownMenuButton}
      >
        <MdArrowDropDown />
      </IconButton>
      <Menu
        anchorEl={menu.anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={menu.open}
        onClose={() => setMenuEle(null)}
      >
        <Logout />
      </Menu>
    </Fragment>
  );
};

export default DropDownMenu;
