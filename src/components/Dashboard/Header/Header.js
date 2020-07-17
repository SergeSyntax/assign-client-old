import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'components/shared/Logo/Logo';
import UserName from './UserName';
import DropDownMenu from './DropDownMenu';

const useStyles = makeStyles(theme => ({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar className={classes.header}>
        <Logo />
        <div>
          <UserName />
          <DropDownMenu />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
