import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action, ActionReducer, MetaReducer } from '@ngrx/store';

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
  on(UsersActions.loadUsersAndCheckIfStoreAlreadyHasItElseMakeApiCall,(state,action)=>{
    return {...state,didApiWork:false,error:null}
  }),
  on(UsersActions.loadUsersSuccess,(state,action)=>{
    return {...state,didApiWork:true,error:null,users:action.users}
  }),
  on(UsersActions.loadUsersSuccessFromCache,(state,action)=>{
    return {...state,didApiWork:true,error:null}
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

export const isActionOfHydrateSuccessType = (action:Action) : action is ReturnType<typeof UsersActions.hydrateSuccess> =>{
  return action.type === UsersActions.hydrateSuccess.type;
}

export const hydrationMetaReducer:MetaReducer = (reducer:ActionReducer<UserState>):ActionReducer<UserState> => {
  return (state,action)=>{
    if(isActionOfHydrateSuccessType(action))
    {
      return action.state;
    }
    return reducer(state,action);
  }
}
