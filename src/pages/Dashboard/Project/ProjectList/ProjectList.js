import React, { useEffect, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from 'actions/projects';
import ProjectSkeleton from './ProjectSkeleton';
import ProjectItem from './ProjectItem/ProjectItem';
import PropTypes from 'prop-types';

const ProjectList = ({ searchProjectValue }) => {
  const dispatch = useDispatch();
  const projectList = useSelector(state => state.projects.projectList);
  const loadingProjects = useSelector(state => state.projects.loadingProjects);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <Grid item container direction="column" spacing={2}>
      {loadingProjects ? (
        <ProjectSkeleton />
      ) : (
        <Fragment>
          {Object.values(projectList)
            .filter(project => project.title.includes(searchProjectValue))
            .map(project => (
              <ProjectItem key={project.id} projectId={project.id} />
            ))}
        </Fragment>
      )}
    </Grid>
  );
};

ProjectList.prototype = {
  searchProjectValue: PropTypes.string.isRequired,
};

export default ProjectList;
