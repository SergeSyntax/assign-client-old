import React from 'react';
import './Footer.scss';
import FooterMenu from './FooterMenu';
import CopyRights from './CopyRights';
import Logo from '../../shared/Logo/Logo';

const Footer = () => {
  return (
    <footer className="landing-footer" id="test">
      <CopyRights />
      <Logo />
      <FooterMenu />
    </footer>
  );
};

export default Footer;
