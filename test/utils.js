import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'sagas';
import rootReducer from 'reducers';
// import checkPropTypes from 'check-prop-types';
import configureStore from 'redux-mock-store'; //ES6 modules

/**
 * @typedef {import('redux'.Store)} Store
 * Create a mocked store with initial state object that will spy on every dispatched action
 * @function createAppMockStore
 * @param {object} initialState
 * @returns {Store} - Redux mock store
 */
export const createAppMockStore = initialState => {
  const mockStore = configureStore([]);
  return mockStore(initialState);
};



















/**
 * @typedef {import('redux').Store} Store
 * Create a testing store with imported reducers, middleware, and initial state.
 * use the global rootReducer. middleware.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const createAppStore = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  sagaMiddleware.run(rootSaga);

  return store;
};

/**
 * @typedef {import('enzyme').ShallowWrapper} ShallowWrapper
 * @param {ShallowWrapper} wrapper Enzyme shallow wrapper.
 * @param {string} val - value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`);

/**
 * Generate error object via the component's propTypes and test it.
 * @param {JSX.Element} component that we want to validate
 * @param {object} values props object to pass to the component
 * @throws {Exception} if the propTypes validation fail.
 */
// w