import { combineReducers } from 'redux';
import users from './users';
import alerts from './alerts';
import projects from './projects';
import sections from './sections';
import tasks from './tasks';

export default combineReducers({ users, alerts, projects, sections, tasks });
