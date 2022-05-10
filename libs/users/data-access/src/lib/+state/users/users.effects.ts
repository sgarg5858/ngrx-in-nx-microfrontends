import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType,OnInitEffects, concatLatestFrom } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { fetch } from '@nrwl/angular';
import { catchError, concatMap, debounceTime, map, of, switchMap, tap } from 'rxjs';
import { UsersService } from '../../users.service';
import * as UserSelectors from './users.selectors'
import * as UsersActions from './users.actions';
import { User } from './users.models';
import * as UsersFeature from './users.reducer';

@Injectable()
export class UsersEffects implements OnInitEffects {

  loadUsersCheckCacheFirstThenAPI$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsersAndCheckIfStoreAlreadyHasItElseMakeApiCall),
      concatLatestFrom(()=>this.store$.select(UserSelectors.getAllUsers)),
      tap(([action,users])=> {
        if(users===null)
        {
         this.store$.dispatch(UsersActions.makingApiCallForUsers());
        }
        else
        {
          this.store$.dispatch(UsersActions.loadUsersSuccessFromCache({users}));
        }
      })),{dispatch:false}
  );

  makeLoadUsersFromApi =createEffect( () =>  this.actions$.pipe(
    ofType(UsersActions.makingApiCallForUsers),
    concatMap(()=> this.userService.getUsers().pipe(
       map((users:User[])=> UsersActions.loadUsersSuccess({users})),
      catchError((error)=>of(UsersActions.loadUsersFailure({error})))
     )
  )
)
  )

  hydrate$ = createEffect(()=> 
  this.actions$.pipe(
  ofType(UsersActions.hyrate),
  map(()=> {
    const userState = localStorage.getItem('userState');
    if(userState)
    {
      console.log("Got sstate")
      try {
        const state:UsersFeature.UserState = JSON.parse(userState);
        console.log(state);
       if(state.users!=null)
       {
        return UsersActions.hydrateSuccess({ state:{...state,filterText:""} });
       }

       } catch (error) {
        localStorage.removeItem('userState');
       }
    }
    console.log("Not working")
    return UsersActions.hydrateFailure();
  
  })
  )
  );
  //SelectorBasedSideEffect For Persisting State in LocalStorage
  serialize$ = createEffect(()=> 
  this.actions$.pipe(
    //It will switch to changes to user state after our app has tried rehydration
    ofType(UsersActions.hydrateSuccess,UsersActions.hydrateFailure),
    switchMap(()=> this.store$.select(UserSelectors.getUsersState).pipe(
    tap((userState)=> {
      console.log("Saving State",userState)
      localStorage.setItem('userState',JSON.stringify(userState));
    })
    ))
  ),{
    dispatch:false
  }
  )

  constructor(private readonly actions$: Actions,private userService:UsersService,private store$:Store) {}
  ngrxOnInitEffects(): Action {
    console.log("When it trigger?")
    return UsersActions.hyrate();
  }
}
