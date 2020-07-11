import {
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  loadingProjects: false,
  createInProgress: false,
  loadingProject: false,
  projectList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECTS_REQUEST:
      return { ...state, loadingProjects: true };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, loadingProjects: false, projectList: _.mapKeys(payload, 'id') };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loadingProjects: false };
    case CREATE_PROJECT_REQUEST:
      return { ...state, createInProgress: true };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createInProgress: false,
        projectList: { [payload.id]: payload, ...state.projectList },
      };
    case CREATE_PROJECT_FAILURE:
      return { ...state, createInProgress: false };
    case FETCH_PROJECT_REQUEST:
      return { ...state, loadingProject: true };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loadingProject: false,
        projectList: payload ? { [payload.id]: payload, ...state.projectList } : state.projectList,
      };
    default:
      return state;
  }
};
