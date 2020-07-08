import { authRequest } from 'utils/request';

export const createProject = values => authRequest.post('/projects', values);

export const fetchProjects = () => authRequest.get('/projects');
