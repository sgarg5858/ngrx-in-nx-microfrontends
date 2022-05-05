import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USERS_FEATURE_KEY, UserState } from './users.reducer';

// Lookup the 'Users' feature state managed by NgRx
export const getUsersState = createFeatureSelector<UserState>(USERS_FEATURE_KEY);

export const didApiWorked = createSelector(getUsersState,
  (userState:UserState)=>{  console.log("Did APi Worked??"); return userState.didApiWork})

export const didApiWork = createSelector(didApiWorked,
    (userState:boolean)=>{ console.log("Did APi Work");return userState})

export const getAllUsers = createSelector(getUsersState,(userState:UserState)=>userState.users);

export const getFilteredText = createSelector(getUsersState,(userState:UserState)=>userState.filterText);

export const getFilteredUsers = createSelector(
  getAllUsers,getFilteredText,
  (users,text)=> users?.filter((user)=>user.name.includes(text)),
)