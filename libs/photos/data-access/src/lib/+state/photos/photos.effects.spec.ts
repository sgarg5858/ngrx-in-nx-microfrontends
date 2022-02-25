import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as PhotosActions from './photos.actions';
import { PhotosEffects } from './photos.effects';

describe('PhotosEffects', () => {
  let actions: Observable<Action>;
  let effects: PhotosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        PhotosEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(PhotosEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: PhotosActions.init() });

      const expected = hot('-a-|', {
        a: PhotosActions.loadPhotosSuccess({ photos: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
