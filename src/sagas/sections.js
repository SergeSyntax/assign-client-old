import { takeLatest, fork, call, put } from 'redux-saga/effects';
import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_SECTION_FAILURE,
  FETCH_SECTIONS_REQUEST,
  FETCH_SECTIONS_FAILURE,
  FETCH_SECTIONS_SUCCESS,
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

function* fetchSections({ payload }) {
  try {
    const {
      data: { sections },
    } = yield call(api.fetchSections, payload);
    console.log(sections);
    yield put({ type: FETCH_SECTIONS_SUCCESS, payload: sections });
  } catch (err) {
    yield put({ type: FETCH_SECTIONS_FAILURE });
    yield put(requestFailure(err));
  }
}

function* watchCreateSectionRequest() {
  yield takeLatest(CREATE_SECTION_REQUEST, createSection);
}

function* watchFetchSectionsRequest() {
  yield takeLatest(FETCH_SECTIONS_REQUEST, fetchSections);
}

export default [fork(watchCreateSectionRequest), fork(watchFetchSectionsRequest)];
