import React from 'react';
import PropTypes from 'prop-types';
import './Label.scss';

const Label = ({ name, children, icon: Icon }) => {
  return (
    <label className="label" htmlFor={name}>
      <Icon className="label__icon" />
      <span>{name}</span>
      {children}
    </label>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Label;
