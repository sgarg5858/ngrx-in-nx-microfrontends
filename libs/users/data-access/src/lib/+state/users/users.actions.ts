import { createAction, props } from '@ngrx/store';
import { User } from './users.models';

export const loadUsers = createAction('[Users Page] load Users');

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