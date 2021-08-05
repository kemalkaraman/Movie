const INITIAL_STATE = {
  isLoading: true,
  movies: [],
  message: 'test',
};

export default function movies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_MOVIES_START':
      return {...state, isLoading: true, message: ''};
    case 'GET_MOVIES_SUCCESS':
      return {...state, movies: action.payload, isLoading: false};
    case 'GET_MOVIES_ERROR':
      return {...state, message: action.payload, isLoading: false};
    default:
      return state;
  }
}
