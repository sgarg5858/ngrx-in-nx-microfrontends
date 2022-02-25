import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AlbumsActions from './albums.actions';
import * as AlbumsFeature from './albums.reducer';
import * as AlbumsSelectors from './albums.selectors';

@Injectable()
export class AlbumsFacade {
 
  public albums$ =this.store.select(AlbumsSelectors.getAlbums);

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
  }
  loadAllAlbums()
  {
    this.store.dispatch(AlbumsActions.loadAlbums())
  }
}
