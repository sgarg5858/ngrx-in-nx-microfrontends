import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';
import * as PostsSelectors from './posts.selectors';

@Injectable()
export class PostsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  // loaded$ = this.store.pipe(select(PostsSelectors.getPostsLoaded));
  // allPosts$ = this.store.pipe(select(PostsSelectors.getAllPosts));
  // selectedPosts$ = this.store.pipe(select(PostsSelectors.getSelected));

  posts$ = this.store.pipe(select(PostsSelectors.getAllPosts));

  constructor(private store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    // this.store.dispatch(PostsActions.init());
  }
  loadAllPosts()
  {
    this.store.dispatch(PostsActions.loadPosts());
  }
}
