import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ALBUMS_FEATURE_KEY, AlbumsState } from './albums.reducer';

// Lookup the 'Albums' feature state managed by NgRx
export const getAlbumsState = createFeatureSelector<AlbumsState>(ALBUMS_FEATURE_KEY);

export const getAlbums = createSelector(
  getAlbumsState,
  albumState => albumState.albums
)