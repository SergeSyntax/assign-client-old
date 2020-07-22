import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Section from './Section/Section';

const SectionList = () => {
  const sectionsList = useSelector(state => state.sections.sectionsList);

  return Object.values(sectionsList).map(section => <Section section={section} key={section.id} />);
};

SectionList.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionList;
