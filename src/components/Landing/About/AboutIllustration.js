import React from 'react'
import illustration from 'assets/images/revenue-graph-monochrome.svg';
import './AboutIllustration.scss'

const AboutIllustration = () => {
  return (
    <div className="about__illustration">
    <img src={illustration} alt="illustration" />
  </div>
  )
}

export default AboutIllustration
