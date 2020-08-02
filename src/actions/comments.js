import { CREATE_COMMENT_REQUEST } from "./types";

export const createComment = payload => ({
  type: CREATE_COMMENT_REQUEST,
  payload,
});
