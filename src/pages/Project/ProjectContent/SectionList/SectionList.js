import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSections } from 'actions/sections';
import Section from './Section/Section';
import SectionListSkeleton from './SectionListSkeleton';

const SectionList = () => {
  const sectionsList = useSelector(state => state.sections.sectionsList);

  return Object.values(sectionsList).map(section => <Section section={section} key={section.id} />);
};

SectionList.propTypes = {
  projectId: PropTypes.string.isRequired,
};

export default SectionList;
