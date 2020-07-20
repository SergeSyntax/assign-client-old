import React from 'react';
import { AppBar, Toolbar, makeStyles } from '@material-ui/core';
import Logo from 'components/shared/Logo/Logo';
import NavbarMenu from '../../shared/NavbarMenu/NavbarMenu';

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
        <NavbarMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
