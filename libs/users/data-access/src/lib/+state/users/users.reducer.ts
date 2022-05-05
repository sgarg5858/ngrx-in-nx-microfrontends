import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as UsersActions from './users.actions';
import { User } from './users.models';

export const USERS_FEATURE_KEY = 'users';

export interface UserState {
 users:User[]|null,
 didApiWork:boolean,
 filterText:string,
 error:any
}
export const initialState: UserState ={
  users:null,
  didApiWork:false,
  filterText:"",
  error:null
}

const usersReducer = createReducer(
  initialState,
  on(UsersActions.loadUsers,(state,action)=>{
    return {...state,didApiWork:false,error:null}
  }),
  on(UsersActions.loadUsersSuccess,(state,action)=>{
    return {...state,didApiWork:true,error:null,users:action.users}
  }),
  on(UsersActions.loadUsersFailure,(state,action)=>{
    return {...state,didApiWork:false,error:action.error,users:[]}
  }),
  on(UsersActions.filterUsers,(state,action)=>{
    return {...state,filterText:action.filter}
  })
);

export function reducer(state: UserState | undefined, action: Action) {
  return usersReducer(state, action);
}
