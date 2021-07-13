const INITIAL_STATE = {
  isLoading: false,
  movies: [],
  message: 'test',
};

export const reducer = (state = INITIAL_STATE, action) => {
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
};
