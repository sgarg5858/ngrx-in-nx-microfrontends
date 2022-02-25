import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as AlbumsActions from './albums.actions';
import { AlbumsEffects } from './albums.effects';
import { AlbumsFacade } from './albums.facade';
import { AlbumsEntity } from './albums.models';
import {
  ALBUMS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './albums.reducer';
import * as AlbumsSelectors from './albums.selectors';

interface TestSchema {
  albums: State;
}

describe('AlbumsFacade', () => {
  let facade: AlbumsFacade;
  let store: Store<TestSchema>;
  const createAlbumsEntity = (id: string, name = ''): AlbumsEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(ALBUMS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([AlbumsEffects]),
        ],
        providers: [AlbumsFacade],
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
      facade = TestBed.inject(AlbumsFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allAlbums$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allAlbums$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadAlbumsSuccess` to manually update list
     */
    it('allAlbums$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allAlbums$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        AlbumsActions.loadAlbumsSuccess({
          albums: [createAlbumsEntity('AAA'), createAlbumsEntity('BBB')],
        })
      );

      list = await readFirst(facade.allAlbums$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
