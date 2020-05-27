import React from 'react';
import { Link } from 'react-router-dom';
import './FooterMenuItem.scss';

const FooterMenuItem = ({ item }) => {
  return (
    <li key={item.title} className="landing-footer__menu__item">
      <Link to={item.path} className="landing-footer__menu__item__link">
        {item.title}
      </Link>
    </li>
  );
};

export default FooterMenuItem;
