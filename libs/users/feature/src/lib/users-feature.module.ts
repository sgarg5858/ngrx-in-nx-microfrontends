import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container/users-container.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UsersDataAccessWithServiceModule} from '@ngrx-in-nx-mfe/users/data-access-with-service';
import { ContainerComponent } from './container/container.component';
import { FilterUsersComponent } from './filter-users/filter-users.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import {RouterModule} from '@angular/router';
import {UsersDataAccessModule} from '@ngrx-in-nx-mfe/users/data-access';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersDataAccessWithServiceModule,
    UsersDataAccessModule,
    RouterModule.forChild([{path:'',component:ContainerComponent}])
  ],
  declarations: [
    UsersContainerComponent,
    ContainerComponent,
    FilterUsersComponent,
    UsersComponent,
    UserComponent
  ],
})
export class UsersFeatureModule {}
