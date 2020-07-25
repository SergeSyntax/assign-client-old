import {
  CREATE_PROJECT_REQUEST,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECT_DATA_REQUEST,
  EDIT_PROJECT_REQUEST,
  DELETE_PROJECT_REQUEST,
} from './types';

export const createProject = payload => ({
  type: CREATE_PROJECT_REQUEST,
  payload,
});

export const fetchProjects = () => ({
  type: FETCH_PROJECTS_REQUEST,
});

export const fetchProjectData = id => ({
  type: FETCH_PROJECT_DATA_REQUEST,
  payload: id,
});

export const editProject = payload => ({
  type: EDIT_PROJECT_REQUEST,
  payload,
});

export const deleteProject = payload => ({
  type: DELETE_PROJECT_REQUEST,
  payload,
});
