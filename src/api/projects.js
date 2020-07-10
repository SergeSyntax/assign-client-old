import Axios from 'axios';

export const createProject = values => Axios.post('/projects', values);

export const fetchProjects = () => Axios.get('/projects');
