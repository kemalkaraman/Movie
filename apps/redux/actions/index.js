import axios from 'axios';

export const getMovies = () => dispatch => {
  dispatch({type: 'GET_MOVIES_START'});
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=802b2c4b88ea1183e50e6b285a27696e&page=1',
    )
    .then(response =>
      dispatch({type: 'GET_MOVIES_SUCCESS', payload: response.data}),
    )
    .catch(error => dispatch({type: 'GET_MOVIES_ERROR', payload: error}));
};
