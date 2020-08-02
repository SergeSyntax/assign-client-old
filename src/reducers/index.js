import { combineReducers } from 'redux';
import users from './users';
import alerts from './alerts';
import projects from './projects';
import sections from './sections';
import tasks from './tasks';
import comments from './comments';

export default combineReducers({ users, alerts, projects, sections, tasks, comments });
