import { createReducer, on } from '@ngrx/store';
import { Post } from './interface';
import { fetchApiAction } from './action';
export interface PostAPIState {
  posts: Post[];
  sucess: string;
  error: string;
  message: string;
  post: Post;
}
const initialState: PostAPIState = {
  posts: [],
  sucess: '',
  error: '',
  message: '',
  post: {
    userId: null,
    id: null,
    title: '',
  },
};
export const fetchPostReducer = createReducer(
  initialState,
  on(fetchApiAction.fetchPost, (state) => ({
    ...state,
  })),
  on(fetchApiAction.fetchPostSucess, (state, { posts }) => ({
    ...state,
    posts: posts,
  })),
  on(fetchApiAction.fetchPostFailure, (state, { error }) => ({
    ...state,
    error: error,
  })),
  on(fetchApiAction.deletePost, (state, { post }) => ({
    ...state,
    post: post,
  })),
  on(fetchApiAction.deletePostSucess, (state, { message }) => ({
    ...state,
    message: message,
  })),
  on(fetchApiAction.deletePostFailure, (state, { error }) => ({
    ...state,
    error: error,
  }))
);
