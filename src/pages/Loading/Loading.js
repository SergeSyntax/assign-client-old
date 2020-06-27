import React from 'react';
import Logo from 'components/shared/Logo/Logo';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <Logo />
    </div>
  );
};

export default Loading;
