import queryHandler from 'utils/queryHandler';
import server from 'config/server';

export const createProject = values => server.post('/projects', values);

export const fetchProjects = paginationSettings =>
  server.get(`/projects/${queryHandler(paginationSettings)}`);

export const fetchProjectData = id => server.get(`/projects/${id}`);

export const editProject = (id, values) => server.put(`/projects/${id}`, values);

export const deleteProject = id => server.delete(`/projects/${id}`);
