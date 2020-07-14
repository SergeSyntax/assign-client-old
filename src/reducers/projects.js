import {
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_REQUEST,
  FETCH_PROJECT_SUCCESS,
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
  savingFinished: true,
  loadingProject: false,
  projectList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECTS_REQUEST:
    case FETCH_PROJECTS_FAILURE:
      return { ...state, loadingProjects: true };
    case FETCH_PROJECTS_SUCCESS:
      return { ...state, loadingProjects: false, projectList: _.mapKeys(payload, 'id') };
    case CREATE_PROJECT_REQUEST:
    case EDIT_PROJECT_REQUEST:
    case DELETE_PROJECT_REQUEST:
      return { ...state, savingInProgress: true, savingFinished: false };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        savingFinished: true,
        projectList: { [payload.id]: payload, ...state.projectList },
      };
    case CREATE_PROJECT_FAILURE:
    case EDIT_PROJECT_FAILURE:
    case DELETE_PROJECT_FAILURE:
      return { ...state, savingInProgress: false, savingFinished: true };
    case FETCH_PROJECT_REQUEST:
      return { ...state, loadingProject: true };
    case FETCH_PROJECT_SUCCESS:
      return {
        ...state,
        loadingProject: false,
        projectList: payload ? { [payload.id]: payload, ...state.projectList } : state.projectList,
      };
    case EDIT_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        savingFinished: true,
        projectList: { ...state.projectList, [payload.id]: payload },
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        savingFinished: true,
        projectList: _.omit(state.projectList, payload),
      };
    default:
      return state;
  }
};
