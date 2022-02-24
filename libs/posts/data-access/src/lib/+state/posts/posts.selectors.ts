import { createFeatureSelector, createSelector } from '@ngrx/store';
import { POSTS_FEATURE_KEY, PostsState } from './posts.reducer';

// Lookup the 'Posts' feature state managed by NgRx
export const getPostsState = createFeatureSelector<PostsState>(POSTS_FEATURE_KEY);

export const getAllPosts = createSelector(
  getPostsState,
  postState=>postState.posts
)