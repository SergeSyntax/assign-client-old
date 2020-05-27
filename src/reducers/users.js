const initialState = {

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'TEST':
    return { ...state, ...payload }

  default:
    return state
  }
}
