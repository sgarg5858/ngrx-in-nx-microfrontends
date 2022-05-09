import { createAction, props } from '@ngrx/store';
import { User } from './users.models';
import { UserState } from './users.reducer';

export const loadUsersAndCheckIfStoreAlreadyHasItElseMakeApiCall = createAction('[Users Page] load Users');

export const makingApiCallForUsers = createAction('[Cache doesnt have it so making api call] loading users from api');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersSuccessFromCache = createAction(
  '[Users/Cache] No Need to Make API CAll',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Users/API] Load Users Failure',
  props<{ error: any }>()
);

export const filterUsers = createAction(
  '[Users Screen] Filter Users Input',
  props<{ filter: string }>()
);
export const hyrate = createAction('[Users Page Load Hydration] Hydrate');

export const hydrateSuccess = createAction(
  '[Users Hydration] Hydrate Success',
    props<{state:UserState}>()
)

export const hydrateFailure = createAction('[Users Hydration] Hydrate Failure')