import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosResolver implements Resolve<{success?:Todo[], error?: string}> {
  constructor(private http: HttpClient){}

  resolve(_route: ActivatedRouteSnapshot, _state: RouterStateSnapshot):
  Observable<{success?:Todo[], error?: string}>
  {
    return this.http.get<Todo[]>("https://jsonplaceholder.typicode.com/todos/").pipe(
      delay(1000),
      map(todos => ({success: todos})),
      catchError(err => of({error: "nao foi possivel carregar os todos"}))
    );
  }
}

export interface Todo {
  userId:    number;
  id:        number;
  title:     string;
  completed: boolean;
}
