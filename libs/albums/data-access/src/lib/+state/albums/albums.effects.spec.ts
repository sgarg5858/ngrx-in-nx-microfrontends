import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as AlbumsActions from './albums.actions';
import { AlbumsEffects } from './albums.effects';

describe('AlbumsEffects', () => {
  let actions: Observable<Action>;
  let effects: AlbumsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AlbumsEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AlbumsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: AlbumsActions.init() });

      const expected = hot('-a-|', {
        a: AlbumsActions.loadAlbumsSuccess({ albums: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
