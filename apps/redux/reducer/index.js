import {combineReducers} from 'redux';
import genres from './genres.js';
import movies from './movies.js';
import trailer from './trailer.js';

export default combineReducers({
  movies,
  genres,
  trailer,
});
