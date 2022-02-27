import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as CommentsActions from './comments.actions';
import { CommentsEntity } from './comments.models';

export const COMMENTS_FEATURE_KEY = 'comments';

export interface CommentsState {
  comments:any[],
  error:string|undefined
}

export const initialState: CommentsState ={
  comments:[],
  error:undefined
}
const commentsReducer = createReducer(
  initialState,
  on(CommentsActions.loadCommentsSuccess,
    (state,action)=>{
      return{
        ...state,
        comments:action.comments
      }
    }),
  on(CommentsActions.loadCommentsFailure,(state,action)=>{
    return{
      ...state,
      error:action.error
    }
  })
  
);

export function reducer(state: CommentsState | undefined, action: Action) {
  return commentsReducer(state, action);
}
