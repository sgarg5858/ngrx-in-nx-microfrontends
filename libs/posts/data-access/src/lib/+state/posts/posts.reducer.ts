import { createReducer, on, Action } from '@ngrx/store';

import * as PostsActions from './posts.actions';

export const POSTS_FEATURE_KEY = 'posts';

export interface PostsState  {
  posts:any[],
  error:string
}

export const initialState: PostsState = {
  posts:[],
  error:""
}

const postsReducer = createReducer(
  initialState, 
  on(PostsActions.loadPostsSuccess,(state,action)=>{
    return {
      ...state,
      posts:action.posts
    }
  }),
  on(PostsActions.loadPostsFailure,(state,action)=>{
    return {
      ...state,
      error:action.error
    }
  })
);

export function reducer(state: PostsState | undefined, action: Action) {
  return postsReducer(state, action);
}
