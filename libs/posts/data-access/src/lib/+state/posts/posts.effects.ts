import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, concatMap, map, of } from 'rxjs';
import { PostsService } from '../../posts.service';

import * as PostsActions from './posts.actions';
import * as PostsFeature from './posts.reducer';

@Injectable()
export class PostsEffects {
  
  loadPosts$ = createEffect( ()=>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      concatMap(()=>this.postsService.getPosts().pipe(
        map((posts:any[])=>PostsActions.loadPostsSuccess({posts})),
        catchError((error)=> of(PostsActions.loadPostsFailure({error})))
      ))
    )
  )

  constructor(private actions$: Actions,private postsService:PostsService) {}
}
