import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TodosActions from './todos.actions';
import { TodosEffects } from './todos.effects';

describe('TodosEffects', () => {
  let actions: Observable<Action>;
  let effects: TodosEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        TodosEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(TodosEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TodosActions.init() });

      const expected = hot('-a-|', {
        a: TodosActions.loadTodosSuccess({ todos: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
