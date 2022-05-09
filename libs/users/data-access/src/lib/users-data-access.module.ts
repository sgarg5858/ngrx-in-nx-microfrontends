import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromUsers from './+state/users/users.reducer';
import { UsersEffects } from './+state/users/users.effects';
import { UsersFacade } from './+state/users/users.facade';
export const metaReducers: MetaReducer<any>[] = [fromUsers.hydrationMetaReducer];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer,{metaReducers}),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersFacade],
})
export class UsersDataAccessModule {}
