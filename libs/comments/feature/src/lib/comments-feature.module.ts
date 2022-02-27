import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsContainerComponent } from './comments-container/comments-container.component';
import {CommentsDataAccessModule} from '@ngrx-in-nx-mfe/comments/data-access'
import {RouterModule} from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    CommentsDataAccessModule,
    RouterModule.forChild([
      {
        path:'',
        component:CommentsContainerComponent
      }
    ])
  ],
  declarations: [
    CommentsContainerComponent
  ],
})
export class CommentsFeatureModule {}
