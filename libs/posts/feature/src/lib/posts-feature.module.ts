import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsContainerComponent } from './posts-container/posts-container.component';
import {RouterModule} from '@angular/router'
import {PostsDataAccessModule} from '@ngrx-in-nx-mfe/posts/data-access'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:PostsContainerComponent
      }
    ]),
    PostsDataAccessModule
  ],
  declarations: [
    PostsContainerComponent
  ],
})
export class PostsFeatureModule {}
