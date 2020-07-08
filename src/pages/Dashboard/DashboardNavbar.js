import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineFolder } from 'react-icons/ai';


const DashboardNavbar = () => {
  return (
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
    </ul>
  </nav>
  )
}

export default DashboardNavbar
