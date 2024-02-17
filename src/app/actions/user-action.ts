import { IUser } from '../components/typings/interfaces';

export const USER_LIST_REQUEST = 'user list request';
export const USER_LIST_SUCESS = 'user list success';
export class userListRequestAction {
  //each action has two things a type and payload
  // if we dont want to pass any payload we dont use any constructor
  readonly type = USER_LIST_REQUEST;
}

export class userListSucessAction {
  //each action has two things a type and payload
  // if we dont want to pass any payload we dont use any constructor
  readonly type = USER_LIST_SUCESS;
  constructor(public payload?: { data: IUser[] }) {}
}
