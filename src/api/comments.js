// {{URL}}

import request from 'utils/request';

export const createComment = ({ message, taskId }) =>
  request.post(`/tasks/${taskId}/comments/`, { message });
