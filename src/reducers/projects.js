import {
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_DATA_REQUEST,
  FETCH_PROJECT_DATA_SUCCESS,
  EDIT_PROJECT_REQUEST,
  EDIT_PROJECT_FAILURE,
  EDIT_PROJECT_SUCCESS,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  loadingProjects: false,
  savingInProgress: false,
  loadingProject: false,
  projectList: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // Fetch projects
    case FETCH_PROJECTS_REQUEST:
    case FETCH_PROJECT_DATA_REQUEST:
      return { ...state, loadingProjects: true };
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loadingProjects: false };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, loadingProjects: false, projectList: _.mapKeys(payload, 'id') };
    // saving in progress: edit / delete / create
    case CREATE_PROJECT_REQUEST:
    case EDIT_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_PROJECT_FAILURE:
    case EDIT_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
      return { ...state, savingInProgress: false };
    // create a new project and add it in the beginning
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        projectList: { [payload.id]: payload, ...state.projectList },
      };
    // fetch project and it's associated data
    case FETCH_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        loadingProject: false,
        projectList: { [payload.id]: _.omit(payload, 'Sections'), ...state.projectList },
      };
    // edit an existing project
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        projectList: { ...state.projectList, [payload.id]: payload },
      };
    // delete an existing project
    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        projectList: _.omit(state.projectList, payload),
      };
    default:
      return state;
  }
};
