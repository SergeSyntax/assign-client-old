import { fork, call, takeLatest, apply, put } from 'redux-saga/effects';
import * as api from '../api/users';
import { CREATE_USER_REQUEST } from 'actions/types';
import { requestFailure } from 'actions/errors';

function* createUser({ type, payload }) {
  try {
    const data = yield call(api.createUser, payload);
    console.log(data);
  } catch (err) {
    yield put(requestFailure(err));    
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(CREATE_USER_REQUEST, createUser);
}

export default [fork(watchCreateUserRequest)];
