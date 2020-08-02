import { all } from 'redux-saga/effects';
import users from './users';
import alerts from './alerts';
import projects from './projects';
import sections from './sections';
import tasks from './tasks';
import comments from './comments';

export default function* rootSaga() {
  yield all([...users, ...alerts, ...projects, ...sections, ...tasks, ...comments]);
}
