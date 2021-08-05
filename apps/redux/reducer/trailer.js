const INITIAL_STATE = {
  trailer: [],
  message: 'test',
};

export default function trailer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_TRAILER_SUCCESS':
      return {...state, trailer: action.payload};
    case 'GET_TRAILER_ERROR':
      return {...state, message: action.payload};
    default:
      return state;
  }
}
