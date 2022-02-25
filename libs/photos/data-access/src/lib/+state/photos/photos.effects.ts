import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as PhotosActions from './photos.actions';
import * as PhotosFeature from './photos.reducer';

@Injectable()
export class PhotosEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PhotosActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return PhotosActions.loadPhotosSuccess({ photos: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return PhotosActions.loadPhotosFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
