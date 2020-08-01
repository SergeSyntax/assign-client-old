import { SHOW_ALERT, CLEAR_ALERT, SHOW_FAILURE_ALERT } from 'actions/types';

const initialState = {
  relevant: false,
  error: false,
  message: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, relevant: true, error: false, message: payload };
    case SHOW_FAILURE_ALERT:
      return { ...state, relevant: true, error: true, message: payload };
    case CLEAR_ALERT:
      return { ...state, relevant: false, error: false, message: '' };
    default:
      return state;
  }
};
