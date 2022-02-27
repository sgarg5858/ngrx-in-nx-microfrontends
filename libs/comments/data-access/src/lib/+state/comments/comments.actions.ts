import { createAction, props } from '@ngrx/store';

export const loadComments = createAction('[Comments Page] loadComments');

export const loadCommentsSuccess = createAction(
  '[Comments/API] Load Comments Success',
  props<{ comments: any[] }>()
);

export const loadCommentsFailure = createAction(
  '[Comments/API] Load Comments Failure',
  props<{ error: any }>()
);
