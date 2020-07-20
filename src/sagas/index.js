import { all } from 'redux-saga/effects';
import users from './users';
import errors from './errors';
import projects from './projects';
import sections from './sections';
import tasks from './tasks';

export default function* rootSaga() {
  yield all([...users, ...errors, ...projects, ...sections, ...tasks]);
}
