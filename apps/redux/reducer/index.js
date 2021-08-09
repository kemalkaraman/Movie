import {combineReducers} from 'redux';
import genres from './genres.js';
import movies from './movies.js';
import trailer from './trailer.js';
import recentMovies from './recentMovies';

export default combineReducers({
  movies,
  genres,
  trailer,
  recentMovies,
});
