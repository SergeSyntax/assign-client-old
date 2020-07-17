import { combineReducers } from 'redux';
import users from './users';
import errors from './errors';
import projects from './projects';
import sections from './sections';

export default combineReducers({ users, errors, projects, sections });
