import { fork, call, takeLatest, put, take, select } from 'redux-saga/effects';
import history from '../history';
import { requestAlert } from 'actions/alerts';
import * as api from '../api/users';
import {
  CREATE_USER_REQUEST,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  FETCH_USER_REQUEST,
  CREATE_USER_SUCCESS,
  USER_LOGOUT_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  CREATE_USER_FAILURE,
  USER_LOGIN_FAILURE,
  OAUTH_AUTH_SUCCESS,
} from 'actions/types';
import AuthCookie from 'utils/AuthCookie';
import request from 'utils/request';
import { connect, createSocketChannel } from 'utils/socket';

const setDefaultHeaders = authToken => {
  request.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${authToken}`,
  };
};

function clearStateAndRedirect(location = '/') {
  window.location.href = location;
}

function* redirect(location = '/dashboard') {
  yield call(history.push, location);
}

function* createUser({ payload }) {
  try {
    const {
      data: { user: userInfo },
      headers: { authorization: authToken },
    } = yield call(api.createUser, payload);
    yield call(setDefaultHeaders, authToken);
    yield call(AuthCookie.set, authToken);
    yield put({
      type: CREATE_USER_SUCCESS,
      payload: { userInfo, authToken },
    });
    yield call(redirect);
  } catch (err) {
    yield put({ type: CREATE_USER_FAILURE });

    yield put(requestAlert(err));
  }
}

function* useLogin({ payload }) {
  try {
    const {
      data: { user: userInfo },
      headers: { authorization: authToken },
    } = yield call(api.useLogin, payload);
    yield call(setDefaultHeaders, authToken);
    yield call(AuthCookie.set, authToken);
    yield put({
      type: USER_LOGIN_SUCCESS,
      payload: { userInfo, authToken },
    });
    yield call(redirect);
  } catch (err) {
    yield put({ type: USER_LOGIN_FAILURE });

    yield put(requestAlert(err));
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

function* oAuth({ token, user }) {
  try {
    yield call(setDefaultHeaders, token);
    yield call(AuthCookie.set, token);
    yield put({ type: OAUTH_AUTH_SUCCESS, payload: { userInfo: user, authToken: token } });
  } catch (err) {
    console.error('oAuth error:', err);
  }
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
