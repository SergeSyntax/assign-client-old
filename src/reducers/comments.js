import {
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_SUCCESS,
  FETCH_PROJECT_DATA_REQUEST,
  FETCH_PROJECT_DATA_FAILURE,
  FETCH_PROJECT_DATA_SUCCESS,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  savingInProgress: false,
  loadingComments: false,
  commentList: {},
  commentIds: [],
};

/**
 * return a task array from the fetched project data
 * @param {array} projectData project data from the backend
 */
const getTasksList = projectData =>
  projectData.Sections.reduce((prevTasks, { Tasks: currTasks }) => {
    return [...prevTasks, ...currTasks];
  }, []);

const extractCommentsFromTaskList = taskList =>
  taskList.reduce((comments, curTask) => {
    return [...comments, ...curTask.Comments];
  }, []);

const getCommentList = projectData => {
  const taskList = getTasksList(projectData);
  return extractCommentsFromTaskList(taskList);
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_PROJECT_DATA_REQUEST:
      return { ...state, loadingComments: true };
    case FETCH_PROJECT_DATA_FAILURE:
      return { ...state, loadingComments: false };
    case FETCH_PROJECT_DATA_SUCCESS: {
      const commentList = _.mapKeys(getCommentList(payload), 'id');
      return {
        ...state,
        loadingComments: false,
        commentList,
        commentIds: Object.keys(commentList),
      };
    }
    // creating a new comment and adding it to the list
    case CREATE_COMMENT_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_COMMENT_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        commentList: { ...state.commentList, [payload.id]: payload },
        commentIds: [...state.commentIds, payload.id],
      };
    default:
      return state;
  }
};
