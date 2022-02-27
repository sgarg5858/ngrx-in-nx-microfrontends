import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as CommentsActions from './comments.actions';
import * as CommentsFeature from './comments.reducer';
import * as CommentsSelectors from './comments.selectors';

@Injectable()
export class CommentsFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  public comments$=this.store.select(CommentsSelectors.getComments);

  constructor(private readonly store: Store) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */

  public loadComments()
  {
    this.store.dispatch(CommentsActions.loadComments());
  }
  init() {
  }
}
