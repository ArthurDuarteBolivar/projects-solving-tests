import { Store } from '@ngrx/store';
import { Todos } from './../todos';
import { loadTodos, setTodos, sucessoCarregaTodos, IAppState } from './app.state';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { of, tap, map, withLatestFrom, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEffectService {

  constructor(private actions$: Actions,
    private http: HttpClient,
    private store: Store<{app: IAppState}>){ }

    carregaTodos = createEffect(
      () => this.actions$.pipe(
        ofType(loadTodos),
        withLatestFrom(this.store.select('app').pipe(
          map((app) => app.todos)
          )),
        switchMap(([ action, todos ]) => {
          if(todos.length === 0){
            return this.http.get<Todos[]>("https://jsonplaceholder.typicode.com/todos/")
              .pipe(
                tap(todos => this.store.dispatch(setTodos({payload: todos}))),
                map(() => sucessoCarregaTodos())
              )
          }
          return of(sucessoCarregaTodos());
      })
      )
      )
}
