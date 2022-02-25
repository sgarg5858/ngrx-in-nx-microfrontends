import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsContainerComponent } from './albums-container/albums-container.component';
import {AlbumsDataAccessModule} from '@ngrx-in-nx-mfe/albums/data-access'
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    AlbumsDataAccessModule,
    RouterModule.forChild([{
    path:'',
    component:AlbumsContainerComponent
  }])],
  declarations: [
    AlbumsContainerComponent
    
  ],
})
export class AlbumsFeatureModule {}
