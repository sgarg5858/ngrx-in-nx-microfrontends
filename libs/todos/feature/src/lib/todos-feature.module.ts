import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosContainerComponent } from './todos-container/todos-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TodosContainerComponent
  ],
})
export class TodosFeatureModule {}
