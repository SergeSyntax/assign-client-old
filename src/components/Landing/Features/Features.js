import React from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import { GiSunglasses, GiCompass } from 'react-icons/gi';
import Feature from './Feature';
import FeaturesBackground from './FeaturesBackground';
import './Features.scss';
import { AiOutlineTeam, AiOutlineSend, AiOutlineFundView, AiOutlineFilter } from 'react-icons/ai';

const FEATURES = [
  {
    title: 'Choose your Teammates',
    content: `Assign provide you the project collaborators system which give you the ability to filter
    unwanted participants and define your teammates rolls in your personal or organization
    projects.`,
    icon: AiOutlineTeam,
  },
  {
    title: 'Pick your goals',
    content: `Assign watch features allow you to track the specific information required to make your
    Job done. You can fallow a whole project, specific section of that project or a single
    task with out getting unwanted information.`,
    icon: AiOutlineFilter,
  },
  {
    title: 'Team transparency',
    content: `Assign's Task management Push data to clients that gets represented as real-time counters,
    charts or logs that allow users to concurrently edit a document and see each other's
    changes.`,
    icon: AiOutlineFundView,
  },
];

const renderFeatures = () =>
  FEATURES.map(feature => <Feature key={feature.title} feature={feature} />);

const Features = () => {
  return (
    <div className="features">
      <FeaturesBackground />
      {renderFeatures()}
    </div>
  );
};

export default Features;
