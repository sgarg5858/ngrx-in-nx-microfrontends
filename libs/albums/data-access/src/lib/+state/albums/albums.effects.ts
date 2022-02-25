import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { catchError, map, of, switchMap } from 'rxjs';
import { AlbumsService } from '../../albums.service';

import * as AlbumsActions from './albums.actions';
import * as AlbumsFeature from './albums.reducer';

@Injectable()
export class AlbumsEffects {
  
  loadAlbums$ = createEffect(()=>
  this.actions$.pipe(
    ofType(AlbumsActions.loadAlbums),
    switchMap(()=> this.albumsService.getAlbums().pipe(
      map((albums:any[])=> AlbumsActions.loadAlbumsSuccess({albums})),
      catchError((err)=> of(AlbumsActions.loadAlbumsFailure({error:err})))
    )
    )
  )
  )

  constructor(private readonly actions$: Actions,private albumsService:AlbumsService) {}
}
