import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from './LoginForm';
import { Provider } from 'react-redux';
import { createAppMockStore } from '../../../../../../test/utils';
import faker from 'faker';

/**
 * Get redux store and component return too return a rendered simulation of the component with redux store included.
 * @param {import('react').ReactComponentElement} component
 * @param {import('redux').Store} store
 * @function renderComponentWithStore
 * @returns {import('@testing-library/react').RenderResult} Render into a container which is appended to document.body. It should be used with cleanup.
 */
function renderComponentWithStore(Component, store) {
  return render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

describe('LoginForm', () => {
  const initialState = { users: { savingInProgress: false } };
  let store;
  beforeAll(() => {
    store = createAppMockStore(initialState);
  });

  let email, password, submit, loginForm;

  beforeEach(() => {
    const { getByLabelText, getByRole, container } = renderComponentWithStore(LoginForm, store);
    email = getByLabelText(/email/i);
    password = getByLabelText(/password/i);
    submit = getByRole('button');
    loginForm = container;
  });

  afterEach(() => {
    store.clearActions();
  });

  it('should render', () => {
    expect(loginForm).toBeDefined();
  });


  it('should update the password input', () => {
    const randomPassword = faker.internet.password();
    fireEvent.change(password, { target: { value: randomPassword } });
    expect(password).toHaveValue(randomPassword);
  });

  it('should dispatch an action on valid form submit', () => {
    // change input to a valid email
    const randomEmail = faker.internet.email();
    fireEvent.change(email, { target: { value: randomEmail } });
    expect(email).toHaveValue(randomEmail);

    // change input to a valid password
    const randomPassword = faker.internet.password();
    fireEvent.change(password, { target: { value: randomPassword } });
    expect(password).toHaveValue(randomPassword);

    // submit and check that the submit action was dispatched
    fireEvent.click(submit);
    expect(store.getActions().length).toBe(1);
  });
});
