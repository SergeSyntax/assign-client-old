import request from 'utils/request';

export const createSection = ({ title, projectId }) =>
request.post(`/projects/${projectId}/sections`, { title });
