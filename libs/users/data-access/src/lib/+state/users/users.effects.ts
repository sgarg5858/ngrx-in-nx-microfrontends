import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType,OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { catchError, concatMap, map, of } from 'rxjs';
import { UsersService } from '../../users.service';

import * as UsersActions from './users.actions';
import { User } from './users.models';
import * as UsersFeature from './users.reducer';

@Injectable()
export class UsersEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      concatMap(()=> this.userService.getUsers().pipe(
        map((users:User[])=> UsersActions.loadUsersSuccess({users})),
        catchError((error)=>of(UsersActions.loadUsersFailure({error})))
      ))

    )
  );

  constructor(private readonly actions$: Actions,private userService:UsersService) {}
  // ngrxOnInitEffects(): Action {
  // }
}
