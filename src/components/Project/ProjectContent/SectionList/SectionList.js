import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Section from './Section/Section';

const SectionList = () => {
  const sectionIds = useSelector(state => state.sections.sectionIds);

  return sectionIds.map(sectionId => <Section sectionId={sectionId} key={sectionId} />);
};

SectionList.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionList;
