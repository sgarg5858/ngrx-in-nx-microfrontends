import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CommentsActions from './comments.actions';
import * as CommentsFeature from './comments.reducer';

@Injectable()
export class CommentsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CommentsActions.loadCommentsSuccess({ comments: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return CommentsActions.loadCommentsFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
