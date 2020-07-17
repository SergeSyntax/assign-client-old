import { takeLatest, fork, call, put } from 'redux-saga/effects';
import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_SECTION_FAILURE,
} from 'actions/types';
import * as api from 'api/sections';
import { requestFailure } from 'actions/errors';

function* createSection({ payload }) {
  try {
    const {
      data: { section },
    } = yield call(api.createSection, payload);
    yield put({ type: CREATE_SECTION_SUCCESS, payload: section });
  } catch (err) {
    yield put({ type: CREATE_SECTION_FAILURE });
    yield put(requestFailure(err));
  }
}

function* watchCreateSectionRequest() {
  yield takeLatest(CREATE_SECTION_REQUEST, createSection);
}

export default [fork(watchCreateSectionRequest)];
