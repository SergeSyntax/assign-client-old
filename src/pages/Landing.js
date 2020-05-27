import React, { useEffect, useState, Fragment } from 'react';
import About from 'components/Landing/About/About';
import Features from 'components/Landing/Features/Features';
import Header from 'components/Landing/Header/Header';
import Footer from 'components/Landing/Footer/Footer';
import ScrollButton from 'components/Landing/ScrollButton/ScrollButton';

const Landing = () => {
  const [scrollButton, showScrollButton] = useState(false);
  const handleScroll = (e) => {
    showScrollButton(window.innerHeight * 0.5 < window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <About />
      <Features />
      <Footer />
      <ScrollButton scrollButton={scrollButton} />
    </Fragment>
  );
};

export default Landing;
