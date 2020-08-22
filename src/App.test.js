import React from 'react';
import { storeFactory } from '../test/utils';
import { shallow } from 'enzyme';
import App from 'App';
import { Provider } from 'react-redux';

// const setup = (state = {}) => {

//   return wrapper;
// };

describe('Application mount', () => {
  it('should render loading screen on user loading truthy state', () => {
    const store = storeFactory();
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    console.log(wrapper.debug());
    expect(store.getState().users.loading).toBe(true);
  });
});
