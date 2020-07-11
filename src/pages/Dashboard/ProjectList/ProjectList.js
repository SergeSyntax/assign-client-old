import React, { useEffect, Fragment } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { fetchProjects } from 'actions/projects';
import ProjectSkeleton from './ProjectSkeleton';
import ProjectItem from './ProjectItem/ProjectItem';
// import EditProjectButton from './EditProjectButton';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects.projectList, shallowEqual);
  const projectList = Object.values(projects);
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
          {projectList.map(project => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </Fragment>
      )}
    </Grid>
  );
};

export default ProjectList;
