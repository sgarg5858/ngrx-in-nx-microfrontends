import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PHOTOS_FEATURE_KEY, State, photosAdapter } from './photos.reducer';

// Lookup the 'Photos' feature state managed by NgRx
export const getPhotosState = createFeatureSelector<State>(PHOTOS_FEATURE_KEY);

const { selectAll, selectEntities } = photosAdapter.getSelectors();

export const getPhotosLoaded = createSelector(
  getPhotosState,
  (state: State) => state.loaded
);

export const getPhotosError = createSelector(
  getPhotosState,
  (state: State) => state.error
);

export const getAllPhotos = createSelector(getPhotosState, (state: State) =>
  selectAll(state)
);

export const getPhotosEntities = createSelector(
  getPhotosState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getPhotosState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getPhotosEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
