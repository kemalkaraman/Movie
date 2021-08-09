import axios from 'axios';

export const getMovies = () => dispatch => {
  dispatch({type: 'GET_MOVIES_START'});
  axios
    .get(
      'https://api.themoviedb.org/3/movie/popular?api_key=802b2c4b88ea1183e50e6b285a27696e&page=1',
    )
    .then(response =>
      dispatch({type: 'GET_MOVIES_SUCCESS', payload: response?.data ?? []}),
    )
    .catch(error => dispatch({type: 'GET_MOVIES_ERROR', payload: error}));
};

export const getGenres = () => dispatch => {
  axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=802b2c4b88ea1183e50e6b285a27696e',
    )
    .then(response =>
      dispatch({type: 'GET_GENRES_SUCCESS', payload: response?.data ?? []}),
    )
    .catch(error => dispatch({type: 'GET_GENRES_ERROR', payload: error}));
};

export const getTrailer = id => dispatch => {
  console.log('id : ' + id);
  axios
    .get(
      'http://api.themoviedb.org/3/movie/' +
        id +
        '/videos?api_key=802b2c4b88ea1183e50e6b285a27696e',
    )
    .then(response =>
      dispatch({type: 'GET_TRAILER_SUCCESS', payload: response?.data ?? []}),
    )
    .catch(error => dispatch({type: 'GET_TRAILER_ERROR', payload: error}));
};

export const getRecentMovies = () => dispatch => {
  axios
    .get(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=802b2c4b88ea1183e50e6b285a27696e',
    )
    .then(response =>
      dispatch({
        type: 'GET_RECENTMOVIES_SUCCESS',
        payload: response?.data ?? [],
      }),
    )
    .catch(error => dispatch({type: 'GET_RECENTMOVIES_ERROR', payload: error}));
};
