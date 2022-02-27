import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CommentsService } from '../../comments.service';

import * as CommentsActions from './comments.actions';

@Injectable()
export class CommentsEffects {
  
  loadComments$ = createEffect(()=>
  this.actions$.pipe(
    ofType(CommentsActions.loadComments),
    mergeMap(()=> this.commentsService.getComments().pipe(
      map((comments:any[])=>CommentsActions.loadCommentsSuccess({comments})),
      catchError((err)=>of(CommentsActions.loadCommentsFailure({error:err})))
    ) )
  ))

  constructor(private readonly actions$: Actions,private commentsService:CommentsService) {}
}
