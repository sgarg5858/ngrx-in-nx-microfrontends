import { createAction, props } from '@ngrx/store';
import { User } from './users.models';
import { UserState } from './users.reducer';


export const hyrate = createAction('[Users Page Load Hydration] Hydrate');

export const hydrateSuccess = createAction(
  '[Users Hydration] Hydrate Success',
    props<{state:UserState}>()
)
export const hydrateFailure = createAction('[Users Hydration] Hydrate Failure')

export const loadUsersAndCheckIfStoreAlreadyHasItElseMakeApiCall = createAction('[Users Page] load Users From Cache First Then API');

export const loadUsersSuccessFromCache = createAction(
  '[Users/Cache] Got Users From Cache',
  props<{ users: User[] }>()
);

export const makingApiCallForUsers = createAction('[ Not Available in Cache,Making api call] Users API');

export const loadUsersSuccess = createAction(
  '[Users/API] Load Users Success',
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
