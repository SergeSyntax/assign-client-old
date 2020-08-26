import { fork, call, takeLatest, put, take, select } from 'redux-saga/effects';
import history from '../utils/history';
import { requestAlert } from 'actions/alerts';
import * as api from '../api/users';
import {
  CREATE_USER_REQUEST,
  USER_LOGIN_REQUEST,
  FETCH_USER_REQUEST,
  USER_LOGOUT_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  AUTH_SUCCESS,
  AUTH_FAILURE,
} from 'actions/types';
import AuthCookie from 'utils/AuthCookie';
import { connect, createSocketChannel } from 'utils/socket';
import server from 'config/server';

const setDefaultHeaders = authToken => {
  server.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
};

function clearStateAndRedirect(location = '/') {
  window.location.href = location;
}

function* authRedirect(location = '/dashboard') {
  yield call(
    history.push,
    history.location.state ? history.location.state.from.pathname : location
  );
}

function* authFlowSuccess(userInfo, authToken) {
  yield call(setDefaultHeaders, authToken);
  yield call(AuthCookie.set, authToken);
  yield put({
    type: AUTH_SUCCESS,
    payload: { userInfo, authToken },
  });
  yield call(authRedirect);
}

function* authFlowFailure(err) {
  yield put({ type: AUTH_FAILURE });
  yield put(requestAlert(err));
}

function* createUser({ payload }) {
  try {
    const {
      data: { user },
      headers: { authorization },
    } = yield call(api.createUser, payload);

    yield call(authFlowSuccess, user, authorization);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* useLogin({ payload }) {
  try {
    const {
      data: { user },
      headers: { authorization },
    } = yield call(api.useLogin, payload);
    yield call(authFlowSuccess, user, authorization);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* oAuth({ token, user }) {
  try {
    yield call(authFlowSuccess, user, token);
  } catch (err) {
    yield call(authFlowFailure, err);
  }
}

function* fetchUser() {
  try {
    const authToken = yield select(state => state.users.authToken);

    if (authToken) {
      yield call(setDefaultHeaders, authToken);

      const {
        data: { user: userInfo },
      } = yield call(api.fetchUser);

      yield put({ type: FETCH_USER_SUCCESS, payload: { userInfo, authToken } });
    } else yield put({ type: FETCH_USER_FAILURE });
  } catch (err) {
    yield call(AuthCookie.clear);
    yield put({ type: FETCH_USER_FAILURE });
  }
}

function* userLogout() {
  yield call(AuthCookie.clear);
  yield call(clearStateAndRedirect);
}

export function* watchUserOauth() {
  const socket = yield call(connect);
  const socketChannel = yield call(createSocketChannel, socket, 'OAUTH_AUTH');

  while (true) {
    try {
      // An error from socketChannel will cause the saga jump to the catch block
      const payload = yield take(socketChannel);
      yield call(oAuth, payload);
    } catch (err) {
      console.error('socket error:', err);
      // socketChannel is still open in catch block
      // if we want end the socketChannel, we need close it explicitly
      // socketChannel.close()
    }
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

function* watchUserLoginRequest() {
  yield takeLatest(USER_LOGIN_REQUEST, useLogin);
}

function* watchFetchUserRequest() {
  yield takeLatest(FETCH_USER_REQUEST, fetchUser);
}

function* watchUserLogoutRequest() {
  yield take(USER_LOGOUT_REQUEST);
  yield call(userLogout);
}

export default [
  fork(watchCreateUserRequest),
  fork(watchUserLoginRequest),
  fork(watchFetchUserRequest),
  fork(watchUserLogoutRequest),
  fork(watchUserOauth),
];
