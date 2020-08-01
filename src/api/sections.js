import request from 'utils/request';

export const createSection = ({ title, projectId }) =>
  request.post(`/projects/${projectId}/sections`, { title });

export const deleteSection = sectionId => request.delete(`/sections/${sectionId}`);
