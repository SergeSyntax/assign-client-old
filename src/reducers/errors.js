import { REQUEST_FAILURE_ALERT, CLEAR_FAILURE_ALERT } from 'actions/types';

const initialState = {
  relevant: false,
  error: '',
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_FAILURE_ALERT:
      return { ...state, relevant: true, error: payload };
    case CLEAR_FAILURE_ALERT:
      return { ...state, relevant: false, error: '' };
    default:
      return state;
  }
};
