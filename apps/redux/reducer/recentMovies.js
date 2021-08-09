const INITIAL_STATE = {
  recentMovies: [],
  message: 'test',
};

export default function recentMovies(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_RECENTMOVIES_SUCCESS':
      return {...state, recentMovies: action.payload};
    case 'GET_RECENTMOVIES_ERROR':
      return {...state, message: action.payload};
    default:
      return state;
  }
}
