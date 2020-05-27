import React from 'react';
import { GoProject } from 'react-icons/go';
import './Logo.scss'

const Logo = () => {
  return (
    <a href="/" className="logo">
      <GoProject className="logo__icon" />
      <h1 className="logo__text">Assign</h1>
    </a>
  );
};

export default Logo;
