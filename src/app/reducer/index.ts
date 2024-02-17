// import { ActionReducerMap, createSelector } from '@ngrx/store';
// import * as fromUser from './movie-reducer';

// // we will not use the reducer directally so we are making an master reducer to
// // acess all values
// export interface rootReducerState {
//   // here we have to pull all reducer state
//   users: fromUser.UserReducerState;
// }
// //we are using this to combine all reducer
// export const rootReducer: ActionReducerMap<rootReducerState> = {
//   // we have to pass each reducer here
//   users: fromUser.userReducer,
// };
// export const getUserState = (state: rootReducerState) => state.users;
// //we will create selectors to get userdate from this root
// export const getloaded = createSelector(getUserState, fromUser.getloaded);
// export const getloading = createSelector(getUserState, fromUser.getloading);
// export const getUsers = createSelector(getUserState, fromUser.getUsers);
