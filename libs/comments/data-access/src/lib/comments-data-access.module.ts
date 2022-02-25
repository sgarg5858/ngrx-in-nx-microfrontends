import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromComments from './+state/comments/comments.reducer';
import { CommentsEffects } from './+state/comments/comments.effects';
import { CommentsFacade } from './+state/comments/comments.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromComments.COMMENTS_FEATURE_KEY,
      fromComments.reducer
    ),
    EffectsModule.forFeature([CommentsEffects]),
  ],
  providers: [CommentsFacade],
})
export class CommentsDataAccessModule {}
