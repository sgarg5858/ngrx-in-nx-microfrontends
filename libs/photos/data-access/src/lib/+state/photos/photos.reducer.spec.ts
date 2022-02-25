import { Action } from '@ngrx/store';

import * as PhotosActions from './photos.actions';
import { PhotosEntity } from './photos.models';
import { State, initialState, reducer } from './photos.reducer';

describe('Photos Reducer', () => {
  const createPhotosEntity = (id: string, name = ''): PhotosEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Photos actions', () => {
    it('loadPhotosSuccess should return the list of known Photos', () => {
      const photos = [
        createPhotosEntity('PRODUCT-AAA'),
        createPhotosEntity('PRODUCT-zzz'),
      ];
      const action = PhotosActions.loadPhotosSuccess({ photos });

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
