import { takeLatest, fork, put, call, takeEvery } from 'redux-saga/effects';
import {
  CREATE_PROJECT_REQUEST,
  FETCH_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  FETCH_PROJECT_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  CREATE_PROJECT_FAILURE,
} from 'actions/types';
import { requestFailure } from 'actions/errors';
import * as api from 'api/projects';

function* createProject({ payload }) {
  try {
    const {
      data: { project },
    } = yield call(api.createProject, payload);
    yield put({ type: CREATE_PROJECT_SUCCESS, payload: project });
  } catch (err) {
    yield put({ type: CREATE_PROJECT_FAILURE });
    yield put(requestFailure(err));
  }
}

function* fetchProjects() {
  try {
    const {
      data: { projects },
    } = yield call(api.fetchProjects);
    yield put({ type: FETCH_PROJECT_SUCCESS, payload: projects });
  } catch (err) {
    yield put({ type: FETCH_PROJECTS_FAILURE });
    yield put(requestFailure(err));
  }
}

function* watchCreateProjectRequest() {
  yield takeLatest(CREATE_PROJECT_REQUEST, createProject);
}

function* watchFetchProjectRequest() {
  yield takeEvery(FETCH_PROJECT_REQUEST, fetchProjects);
}

export default [fork(watchCreateProjectRequest), fork(watchFetchProjectRequest)];
