import { useCallback, useReducer, useEffect } from 'react';
import { useSelector } from 'react-redux';

const initialState = { menuEle: null, projectEdit: false, projectDelete: false };

const types = {
  UPDATE_ONE: 'UPDATE_ONE',
  CLOSE_ALL: 'CLOSE_ALL',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case types.UPDATE_ONE:
      return { ...state, [payload.target]: payload.value };
    case types.CLOSE_ALL:
      return { ...state, menuEle: null, openEditProject: false, openDeleteProject: false };
    default:
      return state;
  }
};

const useProjectMenu = () => {
  const [state, dispatch] = useReducer(reducer, initialState, () => initialState);
  const savingInProgress = useSelector(state => state.projects.savingInProgress);
  const closeAll = useCallback(() => {
    dispatch({ type: types.CLOSE_ALL });
  }, [dispatch]);

  useEffect(() => {
    if (!savingInProgress) closeAll();
  }, [savingInProgress, closeAll]);

  const updateOne = payload => {
    dispatch({ type: types.UPDATE_ONE, payload });
  };

  return { state, updateOne, closeAll };
};

export default useProjectMenu;
