import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from 'sagas';
import rootReducer from 'reducers';
import checkPropTypes from 'check-prop-types';

/**
 * @typedef {import('redux').Store} Store
 * Create a testing store with imported reducers, middleware, and initial state.
 * use the global rootReducer. middleware.
 * @param {object} initialState - Initial state for store.
 * @function storeFactory
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
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
export const checkProps = (component, values) => {
  const propError = checkPropTypes(component.propTypes, values, 'props', component.name); // eslint-disable-line react/forbid-foreign-prop-types
  expect(propError).toBeUndefined();
};
