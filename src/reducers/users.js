import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_SUCCESS,
  USER_LOGIN_SUCCESS,
} from 'actions/types';

const initialState = {
  loading: true,
  authenticated: false,
  user: { id: '', name: '', email: '' },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_SUCCESS:
    case CREATE_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, authenticated: true, user: { ...state.user, ...payload } };

    case FETCH_USER_FAILURE:
      return { loading: false, authenticated: false, user: { id: '', name: '', email: '' } };
    default:
      return state;
  }
};
