import { AlbumsEntity } from './albums.models';
import {
  albumsAdapter,
  AlbumsPartialState,
  initialState,
} from './albums.reducer';
import * as AlbumsSelectors from './albums.selectors';

describe('Albums Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getAlbumsId = (it: AlbumsEntity) => it.id;
  const createAlbumsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as AlbumsEntity);

  let state: AlbumsPartialState;

  beforeEach(() => {
    state = {
      albums: albumsAdapter.setAll(
        [
          createAlbumsEntity('PRODUCT-AAA'),
          createAlbumsEntity('PRODUCT-BBB'),
          createAlbumsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Albums Selectors', () => {
    it('getAllAlbums() should return the list of Albums', () => {
      const results = AlbumsSelectors.getAllAlbums(state);
      const selId = getAlbumsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = AlbumsSelectors.getSelected(state) as AlbumsEntity;
      const selId = getAlbumsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getAlbumsLoaded() should return the current "loaded" status', () => {
      const result = AlbumsSelectors.getAlbumsLoaded(state);

      expect(result).toBe(true);
    });

    it('getAlbumsError() should return the current "error" state', () => {
      const result = AlbumsSelectors.getAlbumsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
