import { fork, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_FAILURE } from 'actions/types';
import { requestFailureAlert } from 'actions/errors';

function* failureAlert({ type, payload }) {
  const { response } = payload;
  // if there no network
  if (!response) yield put(requestFailureAlert('Network error.'));
  // server generated error
  else if (/^4/.test(response.status)) yield put(requestFailureAlert(response.data.message));
  // server unexpected error
  else yield put(requestFailureAlert('Internal Server Error.'));
}

function* watchErrors() {
  yield takeEvery(REQUEST_FAILURE, failureAlert);
}

export default [fork(watchErrors)];
