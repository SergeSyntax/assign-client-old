const initialState = {
  loading: true,
  authenticated: false,
  user: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TEST':
      return { ...state, ...payload };

    default:
      return state;
  }
};
