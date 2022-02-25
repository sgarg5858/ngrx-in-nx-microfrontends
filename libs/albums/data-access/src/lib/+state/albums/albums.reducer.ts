import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as AlbumsActions from './albums.actions';
import { AlbumsEntity } from './albums.models';

export const ALBUMS_FEATURE_KEY = 'albums';

export interface AlbumsState{
  albums:any[],
  error:string|undefined
}



export const initialState: AlbumsState= {
  albums:[],
  error:undefined
}

const albumsReducer = createReducer(
  initialState,
  on(AlbumsActions.loadAlbumsSuccess,
    (state,action)=>{
      return {
        ...state,
        albums:action.albums
      }
    }),
    on(AlbumsActions.loadAlbumsFailure,
      (state,action)=>{
        return {
          ...state,
          error:action.error
        }
      }) 
);

export function reducer(state: AlbumsState | undefined, action: Action) {
  return albumsReducer(state, action);
}
