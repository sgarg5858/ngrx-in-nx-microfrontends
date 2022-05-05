import { Injectable } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';
import * as UsersSelectors from './users.selectors';

@Injectable()
export class UsersFacade {
  users$ = this.store.select(UsersSelectors.getFilteredUsers);
  didApiWork$ = this.store.select(UsersSelectors.didApiWork);
  filterText$ = this.store.select(UsersSelectors.getFilteredText)

  constructor(private readonly store: Store) {
  }
  getUsers()
  {
    this.store.dispatch(UsersActions.loadUsers());
  }
  filterUsers(filter:string)
  {
    this.store.dispatch(UsersActions.filterUsers({filter}))
  }
}
