import { createAction, props } from '@ngrx/store';


export const loadAlbums = createAction(
  '[Albums Page] Load Albums'
)

export const loadAlbumsSuccess = createAction(
  '[Albums/API] Load Albums Success',
  props<{ albums: any[] }>()
);

export const loadAlbumsFailure = createAction(
  '[Albums/API] Load Albums Failure',
  props<{ error: any }>()
);
