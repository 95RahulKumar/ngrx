// import { Action as NgrxAction } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
// export interface Action extends NgrxAction {
//   payload?: any;
// }
export interface Movie {
  name: string;
  releaseDate: string;
  earning: string;
}
export const getMovie = createAction('[Movie] Get Movie');
export const addMovie = createAction(
  '[Movie] Add Movie',
  (movie:Movie)=> movie
  // props<{ movie: Movie }>()
);
export const addMovieSucess = createAction(
  '[Movie] Get Movie',
  (movie:Movie)=> movie
  // props<{ movie: Movie }>()
);
