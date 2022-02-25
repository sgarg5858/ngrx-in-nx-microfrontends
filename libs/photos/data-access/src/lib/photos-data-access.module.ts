import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPhotos from './+state/photos/photos.reducer';
import { PhotosEffects } from './+state/photos/photos.effects';
import { PhotosFacade } from './+state/photos/photos.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromPhotos.PHOTOS_FEATURE_KEY, fromPhotos.reducer),
    EffectsModule.forFeature([PhotosEffects]),
  ],
  providers: [PhotosFacade],
})
export class PhotosDataAccessModule {}
