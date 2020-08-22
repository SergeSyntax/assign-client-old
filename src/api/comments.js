import server from 'config/server';

export const createComment = ({ message, taskId }) =>
  server.post(`/tasks/${taskId}/comments/`, { message });
