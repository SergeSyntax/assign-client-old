import { takeLatest, fork, put, call, takeEvery } from 'redux-saga/effects';
import { CREATE_PROJECT_REQUEST, FETCH_PROJECT_REQUEST } from 'actions/types';
import { requestFailure } from 'actions/errors';
import * as api from 'api/projects';

function* createProject({ payload }) {
  try {
    const { data } = yield call(api.createProject, payload);
    console.log(data);
  } catch (err) {
    yield put(requestFailure(err));
  }
}

function* fetchProjects() {
  try {
    const { data } = yield call(api.fetchProjects);
    console.log(data);
  } catch (err) {
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
