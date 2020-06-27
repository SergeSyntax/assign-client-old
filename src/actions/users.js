import { CREATE_USER_REQUEST } from "./types";

export const createUser = (payload) => ({
  type: CREATE_USER_REQUEST,
  payload
})
