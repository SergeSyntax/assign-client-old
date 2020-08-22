import server from 'config/server';

export const createSection = ({ title, projectId }) =>
  server.post(`/projects/${projectId}/sections`, { title });

export const deleteSection = sectionId => server.delete(`/sections/${sectionId}`);

export const renameSection = ({ title, sectionId }) =>
  server.patch(`/sections/${sectionId}/rename `, { title });
