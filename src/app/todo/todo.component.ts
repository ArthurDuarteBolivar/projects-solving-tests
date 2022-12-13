import { map } from 'rxjs';
import { IAppState, loadTodos, setTodos } from './../store/app.state';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Todos } from '../todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  constructor(
    private http: HttpClient,
    private store: Store<{ app: IAppState }>
  ) {}

  todos$ = this.store.select('app').pipe(map((app) => app.todos));

  ngOnInit(): void {
    this.store.dispatch(loadTodos())
  }
}
