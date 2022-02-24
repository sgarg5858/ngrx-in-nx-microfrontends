import { createAction, props } from '@ngrx/store';

export const loadPosts = createAction('[Posts Page] Load Posts');

export const loadPostsSuccess = createAction(
  '[Posts/API] Load Posts Success',
  props<{ posts: any[] }>()
);

export const loadPostsFailure = createAction(
  '[Posts/API] Load Posts Failure',
  props<{ error: any }>()
);
