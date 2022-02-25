import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAlbums from './+state/albums/albums.reducer';
import { AlbumsEffects } from './+state/albums/albums.effects';
import { AlbumsFacade } from './+state/albums/albums.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromAlbums.ALBUMS_FEATURE_KEY, fromAlbums.reducer),
    EffectsModule.forFeature([AlbumsEffects]),
  ],
  providers: [AlbumsFacade],
})
export class AlbumsDataAccessModule {}
