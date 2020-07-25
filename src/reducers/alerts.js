import { SHOW_ALERT, CLEAR_ALERT } from 'actions/types';

const initialState = {
  relevant: false,
  message: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, relevant: true, message: payload };
    case CLEAR_ALERT:
      return { ...state, relevant: false, message: '' };
    default:
      return state;
  }
};
