import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PhotosActions from './photos.actions';
import * as PhotosFeature from './photos.reducer';
import * as PhotosSelectors from './photos.selectors';

@Injectable()
export class PhotosFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(PhotosSelectors.getPhotosLoaded));
  allPhotos$ = this.store.pipe(select(PhotosSelectors.getAllPhotos));
  selectedPhotos$ = this.store.pipe(select(PhotosSelectors.getSelected));

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(PhotosActions.init());
  }
}
