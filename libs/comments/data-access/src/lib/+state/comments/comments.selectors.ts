import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COMMENTS_FEATURE_KEY,
  CommentsState,
} from './comments.reducer';

// Lookup the 'Comments' feature state managed by NgRx
export const getCommentsState =
  createFeatureSelector<CommentsState>(COMMENTS_FEATURE_KEY);

export const getComments = createSelector(
  getCommentsState,
  commentsState=>commentsState.comments
)