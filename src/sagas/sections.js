import { takeLatest, fork, call, put, select } from 'redux-saga/effects';
import {
  CREATE_SECTION_REQUEST,
  CREATE_SECTION_SUCCESS,
  CREATE_SECTION_FAILURE,
  DELETE_SECTION_REQUEST,
  DELETE_SECTION_SUCCESS,
  DELETE_SECTION_FAILURE,
  RENAME_SECTION_SUCCESS,
  RENAME_SECTION_FAILURE,
  RENAME_SECTION_REQUEST,
} from 'actions/types';
import * as api from 'api/sections';
import { requestAlert, showAlert } from 'actions/alerts';

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
    yield put(showAlert('Deleting section...'));
    yield call(api.deleteSection, payload);
    yield put({ type: DELETE_SECTION_SUCCESS, payload });
  } catch (err) {
    yield put({ type: DELETE_SECTION_FAILURE });
    yield put(requestAlert(err));
  }
}

function* renameSection({ payload }) {
  try {
    // if the title is the same avoid sending a patch request to the server
    const oldSectionTitle = yield select(
      state => state.sections.sectionList[payload.sectionId].title
    );
    if (oldSectionTitle === payload.title) return;
    yield put(showAlert('renaming section...'));
    const {
      data: { section },
    } = yield call(api.renameSection, payload);
    yield put({ type: RENAME_SECTION_SUCCESS, payload: section });
  } catch (err) {
    yield put({ type: RENAME_SECTION_FAILURE });
    yield put(requestAlert(err));
  }
}

function* watchCreateSectionRequest() {
  yield takeLatest(CREATE_SECTION_REQUEST, createSection);
}

function* watchDeleteSectionRequest() {
  yield takeLatest(DELETE_SECTION_REQUEST, deleteSection);
}

function* watchRenameSectionRequest() {
  yield takeLatest(RENAME_SECTION_REQUEST, renameSection);
}

export default [
  fork(watchCreateSectionRequest),
  fork(watchDeleteSectionRequest),
  fork(watchRenameSectionRequest),
];
