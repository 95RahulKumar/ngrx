import { createReducer, on } from '@ngrx/store';
import { Movie, addMovie, getMovie } from '../actions';

export interface MovieState {
  movies: Array<Movie>;
}

const initialState: Array<Movie> = [];
export const movieReducer = createReducer(
  initialState,
  on(getMovie, (state) => [...mockMovie()]),
  on(addMovie, (state, movie) => [...state, movie])
);

function mockMovie(): Array<Movie> {
  let movieArr = [];
  let movie = {
    name: 'xyz',
    releaseDate: '19December',
    earning: 'some ammount',
  };
  let movie1 = {
    name: 'abc',
    releaseDate: '20December',
    earning: 'good ammount',
  };
  let movie2 = {
    name: 'def',
    releaseDate: '21December',
    earning: 'great ammount',
  };
  movieArr.push(movie, movie1, movie2);
  return movieArr;
}
