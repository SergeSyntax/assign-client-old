import React from 'react';
import Button from '@material-ui/core/Button';
import './ScrollDownButton.scss';

const ScrollDownButton = () => {
  return (
    <Button
      disableFocusRipple
      id="scroll-down-button"
      onClick={(e) => {
        e.currentTarget.blur();
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
      }}
    ><span></span></Button>
  );
};

export default ScrollDownButton;
