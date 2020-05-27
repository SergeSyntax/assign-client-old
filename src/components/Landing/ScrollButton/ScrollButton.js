import React from 'react';
import Fab from '@material-ui/core/Fab';
import { IoIosArrowUp } from 'react-icons/io';
import PropTypes from 'prop-types';
import Zoom from '@material-ui/core/Zoom';
import './ScrollButton.scss';
import { useEffect } from 'react';
import { useRef } from 'react';

const ScrollButton = ({ scrollButton }) => {
  const ScrollButtonRef = useRef();
  useEffect(() => {
    scrollButton && ScrollButtonRef.current.focus();
  }, [scrollButton]);

  return (
    <Zoom in={scrollButton}>
      <Fab
        ref={ScrollButtonRef}
        focusRipple={true}
        onClick={(e) => {
          window.scrollTo({ behavior: 'smooth', top: 0 });
        }}
        id="scroll-button"
        variant="round"
        aria-label="scroll"
      >
        <IoIosArrowUp className="scroll-button__icon" />
      </Fab>
    </Zoom>
  );
};

ScrollButton.propTypes = {
  scrollButton: PropTypes.bool.isRequired,
};

export default ScrollButton;
