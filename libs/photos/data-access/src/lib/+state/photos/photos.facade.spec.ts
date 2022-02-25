import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as PhotosActions from './photos.actions';
import { PhotosEffects } from './photos.effects';
import { PhotosFacade } from './photos.facade';
import { PhotosEntity } from './photos.models';
import {
  PHOTOS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './photos.reducer';
import * as PhotosSelectors from './photos.selectors';

interface TestSchema {
  photos: State;
}

describe('PhotosFacade', () => {
  let facade: PhotosFacade;
  let store: Store<TestSchema>;
  const createPhotosEntity = (id: string, name = ''): PhotosEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(PHOTOS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([PhotosEffects]),
        ],
        providers: [PhotosFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(PhotosFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allPhotos$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allPhotos$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadPhotosSuccess` to manually update list
     */
    it('allPhotos$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allPhotos$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        PhotosActions.loadPhotosSuccess({
          photos: [createPhotosEntity('AAA'), createPhotosEntity('BBB')],
        })
      );

      list = await readFirst(facade.allPhotos$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
