import { CREATE_PROJECT_REQUEST, FETCH_PROJECTS_REQUEST, FETCH_PROJECT_REQUEST } from './types';

export const createProject = payload => ({
  type: CREATE_PROJECT_REQUEST,
  payload,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS_REQUEST,
});

export const fetchProject = id => ({
  type: FETCH_PROJECT_REQUEST,
  payload: id,
});
