import React from 'react';
import scutchIllustration from 'assets/images/undraw_online_collaboration_7pfp.svg';
import choseIllustration from 'assets/images/undraw_online_connection_6778.svg';
import phoneIllustration from 'assets/images/undraw_push_notifications_im0o.svg';
import AboutRubric from './AboutRubric';
import AboutIllustration from './AboutIllustration';
import './About.scss';

const RUBRICS = [
  {
    title: 'where team work get efficient!',
    paragraph: `Assign's panel is a cross-platform/device task manager that will help you keep your tasks
  organized, detailed and simple: get more work done by breaking your goals down to tasks
  and prioritize them by the sections you define.`,
    illustration: scutchIllustration,
  },
  {
    title: 'where services free!',
    paragraph: `There no service limitations, subscription, or any charges regarding the application, all
  the developers working on that project doing that voluntarily for other developers to use,
  there is a donation option for hosing expenses.`,
    illustration: choseIllustration,
  },
  {
    title: 'where your opinion matters!',
    paragraph: `Got a manual task that you prefer to be automated or a feature that you would like to be
  added to our task manager to make your life easier? Send us feedback and we will try to
  make it happen, our Team always working on forwarding our project and we open for
  suggestions.`,
    illustration: phoneIllustration,
  },
];

const renderRubrics = () =>
  RUBRICS.map((rubric) => <AboutRubric key={rubric.title} rubric={rubric} />);

const About = () => {
  return (
    <section className="about">
      <AboutIllustration />
      <div className="about__contact">{renderRubrics()}</div>
    </section>
  );
};

export default About;
