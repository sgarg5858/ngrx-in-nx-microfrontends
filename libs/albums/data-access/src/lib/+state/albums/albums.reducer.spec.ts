import { Action } from '@ngrx/store';

import * as AlbumsActions from './albums.actions';
import { AlbumsEntity } from './albums.models';
import { State, initialState, reducer } from './albums.reducer';

describe('Albums Reducer', () => {
  const createAlbumsEntity = (id: string, name = ''): AlbumsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Albums actions', () => {
    it('loadAlbumsSuccess should return the list of known Albums', () => {
      const albums = [
        createAlbumsEntity('PRODUCT-AAA'),
        createAlbumsEntity('PRODUCT-zzz'),
      ];
      const action = AlbumsActions.loadAlbumsSuccess({ albums });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
