import React from 'react';
import { Button, Avatar, Divider, IconButton } from '@material-ui/core';
import Cookies from 'js-cookie';
import Logo from 'components/shared/Logo/Logo';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { AiOutlineFolder } from 'react-icons/ai';
import './Dashboard.scss';
import AppBar from '@material-ui/core/AppBar';
import { MdAccountCircle } from 'react-icons/md';
import Menu from '@material-ui/core/Menu';


const Dashboard = () => {
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <AppBar position="relative" className="dashboard__header__app-bar">
          <Logo />
          <div className="user-menu">
            <Avatar className="user-menu__avatar">SK</Avatar>
            <span>Sergway</span>
          </div>

          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => alert('test')}
            color="inherit"
          >
            <MdAccountCircle />
          </IconButton>
        </AppBar>
      </header>
      <div className="container">
        <nav className="dashboard__navbar">
          <ul className="dashboard__navbar__menu">
            <li className="dashboard__navbar__menu__item">
              <NavLink
                className="dashboard__navbar__menu__item__link"
                activeClassName="dashboard__navbar__menu__item__link--active"
                exact
                to="/projects"
              >
                <AiOutlineFolder className="dashboard__navbar__menu__item__link__icon" />
                <span className="dashboard__navbar__menu__item__link__text">Projects</span>
              </NavLink>
            </li>
            <li className="dashboard__navbar__menu__item">
              <a
                className="dashboard__navbar__menu__item__link"
                href="/logout"
                onClick={e => {
                  e.preventDefault();
                  Cookies.remove('assign-auth-token');
                  window.location.reload();
                }}
              >
                <FiLogOut className="dashboard__navbar__menu__item__link__icon" />
                <span className="dashboard__navbar__menu__item__link__text">Logout</span>
              </a>
            </li>
          </ul>
          <Divider orientation="vertical" />
        </nav>
        <div className="dashboard__content">project page</div>
      </div>
    </div>
  );
};

export default Dashboard;
