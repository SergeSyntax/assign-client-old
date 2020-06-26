import React from 'react';
import './FooterMenu.scss';
import FooterMenuItem from './FooterMenuItem';

const FOOTER_MENU_LIST = [
  { title: 'contact us', path: '/' },
  { title: 'terms', path: '/' },
  { title: 'privacy policy', path: '/' },
];

const renderMenu = () =>
  FOOTER_MENU_LIST.map((item) => <FooterMenuItem key={item.path} item={item} />);

const FooterMenu = () => <ul className="landing-footer__menu">{renderMenu()}</ul>;

export default FooterMenu;
