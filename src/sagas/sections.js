import { takeLatest, fork, call, put } from 'redux-saga/effects';
import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_SECTION_FAILURE,
  DELETE_SECTION_REQUEST,
  DELETE_SECTION_SUCCESS,
  DELETE_SECTION_FAILURE,
} from 'actions/types';
import * as api from 'api/sections';
import { requestAlert } from 'actions/alerts';

function* createSection({ payload }) {
  try {
    const {
      data: { section },
    } = yield call(api.createSection, payload);
    yield put({ type: CREATE_SECTION_SUCCESS, payload: section });
  } catch (err) {
    yield put({ type: CREATE_SECTION_FAILURE });
    yield put(requestAlert(err));
  }
}

function* deleteSection({ payload }) {
  try {
    yield call(api.deleteSection, payload);
    yield put({ type: DELETE_SECTION_SUCCESS, payload });
  } catch (err) {
    yield put({ type: DELETE_SECTION_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateSectionRequest() {
  yield takeLatest(CREATE_SECTION_REQUEST, createSection);
}

function* watchDeleteSectionRequest() {
  yield takeLatest(DELETE_SECTION_REQUEST, deleteSection);
}

export default [fork(watchCreateSectionRequest), fork(watchDeleteSectionRequest)];
