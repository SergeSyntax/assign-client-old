import React from 'react';
import Logo from 'components/shared/Logo/Logo';
import './Loading.scss';
import { Dialog } from '@material-ui/core';

const Loading = () => {
  return (
    <Dialog fullScreen open={true}>
      <div className="loading" data-test="loading-page">
        <div className="loading__spinner"></div>
        <Logo />
      </div>
    </Dialog>
  );
};

export default Loading;
