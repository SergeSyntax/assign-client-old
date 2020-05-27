import React from 'react';
import Logo from '../../shared/Logo/Logo';
import HeaderTitle from './HeaderTitle';
import HeaderActions from './HeaderActions';
import ScrollDownButton from './ScrollDownButton';
import './Header.scss';

const Header = () => {
  return (
    <header className="landing__header">
      <Logo />
      <HeaderTitle />
      <HeaderActions />
      <ScrollDownButton />
    </header>
  );
};

export default Header;
