import {
  FETCH_PROJECT_DATA_SUCCESS,
  CREATE_TASK_REQUEST,
  CREATE_TASK_FAILURE,
  CREATE_TASK_SUCCESS,
} from 'actions/types';
import _ from 'lodash';

const initialState = {
  savingInProgress: false,
  taskList: {},
  taskIds: [],
};

/**
 * return a task array from the fetched project data
 * @param {array} projectData project data from the backend
 */
const getTasksList = projectData =>
  projectData.Sections.reduce((prevTasks, { Tasks: currTasks }) => {
    return [...prevTasks, ...currTasks];
  }, []);

export default (state = initialState, { type, payload }) => {
  switch (type) {
    // set the tasks data for the current project
    case FETCH_PROJECT_DATA_SUCCESS: {
      const taskList = _.mapKeys(getTasksList(payload), 'id');
      return { ...state, taskList, taskIds: Object.keys(taskList) };
    }
    // creating a new task
    case CREATE_TASK_REQUEST:
      return { ...state, savingInProgress: true };
    case CREATE_TASK_FAILURE:
      return { ...state, savingInProgress: false };
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        savingInProgress: false,
        taskList: { ...state.taskList, [payload.id]: payload },
        taskIds: [...state.taskIds, payload.id],
      };

    default:
      return state;
  }
};
