import React from 'react';
import PropTypes from 'prop-types';
import './Feature.scss';

const Feature = ({ feature }) => {
  const { icon: Icon, title, content } = feature;
  return (
    <div className="feature">
      <Icon className="feature__icon" />
      <h3 className="feature__heading">{title}</h3>
      <p className="feature__paragraph">{content}</p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default Feature;
