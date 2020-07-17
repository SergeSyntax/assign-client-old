import Axios from 'axios';
import queryHandler from 'utils/queryHandler';

export const createProject = values => Axios.post('/projects', values);


export const fetchProjects = paginationSettings =>
  Axios.get(`/projects/${queryHandler(paginationSettings)}`);

export const fetchProject = id => Axios.get(`/projects/${id}`);

export const editProject = (id, values) => Axios.put(`/projects/${id}`, values);

export const deleteProject = id => Axios.delete(`/projects/${id}`);
