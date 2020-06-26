import React from 'react';
import { GoProject } from 'react-icons/go';
import './Logo.scss';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <GoProject className="logo__icon" />
      <h1 className="logo__text">Assign</h1>
    </Link>
  );
};

export default Logo;
