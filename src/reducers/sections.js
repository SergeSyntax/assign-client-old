import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_PROJECT_FAILURE,
} from 'actions/types';

const initialState = {
  savingInProgress: false,
  sectionsList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_SECTION_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_PROJECT_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_SECTION_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        sectionsList: { [payload.id]: payload, ...state.sectionsList },
      };
    default:
      return state;
  }
};
