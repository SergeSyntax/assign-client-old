import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
  alertMessage: {
    fontSize: '1.4rem',
    padding: theme.spacing(2),
    backgroundColor: '#fffbdd',
  },
  content: { backgroundColor: '#f6f8fa', padding: theme.spacing(2), fontSize: '1.4rem' },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  firstParagraph: {
    paddingBottom: '1rem',
  },
}));

const ProjectDeleteContent = ({ project }) => {
  const classes = useStyle();

  return (
    <Fragment>
      <p className={classes.alertMessage}>
        Unexpected bad things will happen if you don’t read this!
      </p>
      <div className={classes.content}>
        <p className={classes.firstParagraph}>
          This action <strong>cannot</strong> be undone. This will permanently delete the{' '}
          <strong>{project.title}</strong> project, lists, tasks, and activity, and remove all
          collaborator associations.
        </p>
        <p>
          <strong>Note:</strong> there is an option to put your project in the archive. Once{' '}
          <strong>archived</strong>, a project's access changes to <strong>view only</strong> for
          all participants. Archiving a project allows you to retain historical information so
          nothing will be lost.
        </p>
      </div>
    </Fragment>
  );
};

ProjectDeleteContent.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectDeleteContent;
