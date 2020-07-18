import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_PROJECT_FAILURE,
  FETCH_SECTIONS_REQUEST,
  FETCH_SECTIONS_FAILURE,
  FETCH_SECTIONS_SUCCESS,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  savingInProgress: false,
  loadingSections: false,
  sectionsList: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_SECTIONS_REQUEST:
      return { ...state, loadingSections: true };
    case FETCH_SECTIONS_FAILURE:
      return { ...state, loadingSections: false };
    case FETCH_SECTIONS_SUCCESS:
      return { ...state, loadingSections: false, sectionsList: _.mapKeys(payload, 'id') };
    case CREATE_SECTION_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_PROJECT_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_SECTION_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        sectionsList: { ...state.sectionsList, [payload.id]: payload },
      };
    default:
      return state;
  }
};
