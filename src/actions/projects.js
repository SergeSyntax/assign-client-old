import { CREATE_PROJECT_REQUEST, FETCH_PROJECT_REQUEST } from './types';

export const createProject = payload => ({
  type: CREATE_PROJECT_REQUEST,
  payload,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECT_REQUEST,
});
