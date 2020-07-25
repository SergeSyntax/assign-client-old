import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_PROJECT_FAILURE,
  FETCH_PROJECT_DATA_FAILURE,
  CREATE_TASK_REQUEST,
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  FETCH_PROJECT_DATA_REQUEST,
  FETCH_PROJECT_DATA_SUCCESS,
  CREATE_SECTION_FAILURE,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  savingInProgress: false,
  loadingSections: false,
  sectionList: {},
  sectionIds: [],
};

const getSectionList = sections => sections.map(section => _.omit(section, 'Tasks'));

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // setting section data for the current project
    case FETCH_PROJECT_DATA_REQUEST:
      return { ...state, loadingSections: true };
    case FETCH_PROJECT_DATA_FAILURE:
      return { ...state, loadingSections: false };
    case FETCH_PROJECT_DATA_SUCCESS: {
      const sectionList = _.mapKeys(getSectionList(payload.Sections), 'id');
      return {
        ...state,
        loadingSections: false,
        sectionList,
        sectionIds: Object.keys(sectionList),
      };
    }
    // creating a new section and adding it to the list
    case CREATE_SECTION_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_SECTION_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_SECTION_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        sectionList: { ...state.sectionList, [payload.id]: payload },
        sectionIds: [...state.sectionIds, payload.id],
      };

    default:
      return state;
  }
};
