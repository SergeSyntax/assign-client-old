import queryHandler from 'utils/queryHandler';
import request from 'utils/request';

export const createProject = values => request.post('/projects', values);

export const fetchProjects = paginationSettings =>
  request.get(`/projects/${queryHandler(paginationSettings)}`);

export const fetchProjectData = id => request.get(`/projects/${id}`);

export const editProject = (id, values) => request.put(`/projects/${id}`, values);

export const deleteProject = id => request.delete(`/projects/${id}`);
