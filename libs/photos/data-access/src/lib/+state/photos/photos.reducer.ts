import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as PhotosActions from './photos.actions';
import { PhotosEntity } from './photos.models';

export const PHOTOS_FEATURE_KEY = 'photos';

export interface State extends EntityState<PhotosEntity> {
  selectedId?: string | number; // which Photos record has been selected
  loaded: boolean; // has the Photos list been loaded
  error?: string | null; // last known error (if any)
}

export interface PhotosPartialState {
  readonly [PHOTOS_FEATURE_KEY]: State;
}

export const photosAdapter: EntityAdapter<PhotosEntity> =
  createEntityAdapter<PhotosEntity>();

export const initialState: State = photosAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const photosReducer = createReducer(
  initialState,
  on(PhotosActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(PhotosActions.loadPhotosSuccess, (state, { photos }) =>
    photosAdapter.setAll(photos, { ...state, loaded: true })
  ),
  on(PhotosActions.loadPhotosFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return photosReducer(state, action);
}
