import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_REQUEST,
  CREATE_USER_REQUEST,
  CREATE_USER_FAILURE,
  USER_LOGIN_FAILURE,
} from 'actions/types';
import AuthCookie from 'utils/AuthCookie';

const initialState = {
  loading: true,
  savingInProgress: false,
  authenticated: false,
  authToken: AuthCookie.get(),
  userInfo: { id: '', name: '', email: '' },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER_REQUEST:
    case USER_LOGIN_REQUEST:
      return { ...state, savingInProgress: true };
    case FETCH_USER_SUCCESS:
    case CREATE_USER_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        savingInProgress: false,
        authenticated: true,
        authToken: payload.authToken,
        userInfo: { ...state.userInfo, ...payload.userInfo },
      };

    case CREATE_USER_FAILURE:
    case USER_LOGIN_FAILURE:
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        authenticated: false,
        savingInProgress: false,
        authToken: null,
        userInfo: { id: '', name: '', email: '' },
      };
    default:
      return state;
  }
};
