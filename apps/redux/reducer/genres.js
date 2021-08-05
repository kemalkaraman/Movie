const INITIAL_STATE = {
  genres: [],
  message: 'test',
};

export default function genres(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'GET_GENRES_SUCCESS':
      return {...state, genres: action.payload};
    case 'GET_GENRES_ERROR':
      return {...state, message: action.payload};
    default:
      return state;
  }
}
