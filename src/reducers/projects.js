import {
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  loadingProjects: false,
  createInProgress: false,
  projects: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECT_REQUEST:
      return { ...state, loadingProjects: true };
    case FETCH_PROJECT_SUCCESS:
      return { ...state, loadingProjects: false, projects: _.mapKeys(payload, 'id') };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loadingProjects: false };
    case CREATE_PROJECT_REQUEST:
      return { ...state, createInProgress: true };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        createInProgress: false,
        projects: { [payload.id]: payload, ...state.projects },
      };
    case CREATE_PROJECT_FAILURE:
      return { ...state, createInProgress: false };

    default:
      return state;
  }
};
