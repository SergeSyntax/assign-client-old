import request from 'utils/request';

export const createSection = ({ title, projectId }) =>
  request.post(`/projects/${projectId}/sections`, { title });

export const deleteSection = sectionId => request.delete(`/sections/${sectionId}`);

export const renameSection = ({ title, sectionId }) =>
  request.patch(`/sections/${sectionId}/rename `, { title });
