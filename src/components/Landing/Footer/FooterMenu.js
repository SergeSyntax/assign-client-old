import React from 'react';
import './FooterMenu.scss';
import FooterMenuItem from './FooterMenuItem';

const FOOTER_MENU_LIST = [
  { title: 'contact us', path: '/contact-us' },
  { title: 'terms', path: '/terms' },
  { title: 'privacy policy', path: '/privacy-policy' },
];

const renderMenu = () =>
  FOOTER_MENU_LIST.map((item) => <FooterMenuItem key={item.path} item={item} />);

const FooterMenu = () => <ul className="landing-footer__menu">{renderMenu()}</ul>;

export default FooterMenu;
