import React, { useEffect, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from 'actions/projects';
import ProjectSkeleton from './ProjectSkeleton';
import ProjectItem from './ProjectItem/ProjectItem';
// import EditProjectButton from './EditProjectButton';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projectIds = useSelector(state => state.projects.projectIds);
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
          {projectIds.map(projectId => (
            <ProjectItem key={projectId} projectId={projectId} />
          ))}
        </Fragment>
      )}
    </Grid>
  );
};

export default ProjectList;
