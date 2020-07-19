import { CREATE_TASK_SUCCESS, CREATE_TASK_FAILURE, CREATE_TASK_REQUEST } from 'actions/types';
import { fork, takeLatest, call, put } from 'redux-saga/effects';
import { requestFailure } from 'actions/errors';
import * as api from 'api/sections';

function* createSection({ payload }) {
  try {
    const {
      data: { section },
    } = yield call(api.createTask, payload);
    yield put({ type: CREATE_TASK_SUCCESS, payload: section });
  } catch (err) {
    yield put({ type: CREATE_TASK_FAILURE });
    yield put(requestFailure(err));
  }
}

function* watchCreateSectionRequest() {
  yield takeLatest(CREATE_TASK_REQUEST, createSection);
}

export default [fork(watchCreateSectionRequest)];
