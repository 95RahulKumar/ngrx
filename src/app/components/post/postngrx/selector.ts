import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostAPIState } from './reducer';

export const selectFeature = createFeatureSelector<PostAPIState>('posts');

export const selectFetchPostSelector = createSelector(
  selectFeature,
  (state: PostAPIState) => state.sucess
);
export const selectFetchSelectorSucess = createSelector(
  selectFeature,
  (state: PostAPIState) => state.posts
);
export const selectFetchSelectorError = createSelector(
  selectFeature,
  (state: PostAPIState) => state.error
);
export const deleteselector = createSelector(
  selectFeature,
  (state: PostAPIState) => state.post
);

export const deleteSuccessselector = createSelector(
  selectFeature,
  (state: PostAPIState) => state.message
);
export const deleteFailureselector = createSelector(
  selectFeature,
  (state: PostAPIState) => state.error
);
