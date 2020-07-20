import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_PROJECT_FAILURE,
  FETCH_SECTIONS_REQUEST,
  FETCH_SECTIONS_FAILURE,
  FETCH_SECTIONS_SUCCESS,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  savingInProgress: false,
  loadingSections: false,
  sectionsList: {},
};

const mapToKeysTasks = sectionArray =>
  sectionArray.map(section => ({ ...section, Tasks: _.mapKeys(section.Tasks, 'id') }));

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SECTIONS_REQUEST:
      return { ...state, loadingSections: true };
    case FETCH_SECTIONS_FAILURE:
      return { ...state, loadingSections: false };
    case FETCH_SECTIONS_SUCCESS: {
      return {
        ...state,
        loadingSections: false,
        sectionsList: _.mapKeys(mapToKeysTasks(payload), 'id'),
      };
    }
    case CREATE_SECTION_REQUEST:
    case CREATE_TASK_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_PROJECT_FAILURE:
    case CREATE_TASK_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_SECTION_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        sectionsList: { ...state.sectionsList, [payload.id]: payload },
      };
    case CREATE_TASK_SUCCESS: {
      const newTest = {
        ...state,
        savingInProgress: false,
        sectionsList: {
          ...state.sectionsList,
          [payload.sectionId]: {
            ...state.sectionsList[payload.sectionId],
            Tasks: { ...state.sectionsList[payload.sectionId].Tasks, [payload.id]: payload },
          },
        },
      };
      return newTest;
    }

    // return
    // return {
    // ...state,
    // savingInProgress: false,
    // sectionsList: {
    //   ...state.sectionsList,
    //   [payload.sectionId]: {
    //     ...state.sectionsList.sectionId,
    //     Tasks: [...state.sectionsList.sectionId.Tasks, payload],
    //   },
    // },
    // };

    default:
      return state;
  }
};
