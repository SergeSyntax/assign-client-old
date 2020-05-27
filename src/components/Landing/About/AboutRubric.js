import React from 'react';
import PropTypes from 'prop-types';
import './AboutRubric.scss';

const AboutRubric = ({ rubric: { illustration, title, paragraph } }) => {
  return (
    <div className="about__rubric">
      <img className="about__rubric__illustration" src={illustration} alt="illustration" />
      <h3 className="about__rubric__heading">{title}</h3>
      <p className="about__rubric__paragraph">{paragraph}</p>
    </div>
  );
};

AboutRubric.prototype = {
  rubric: PropTypes.object.isRequired,
};

export default AboutRubric;
