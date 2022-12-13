import { Todos } from './todos';
import { appReducer, decrementaContador, IAppState, incrementaContador } from './store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private store: Store<{ app: IAppState }>){}

  title = 'ngrx';

  counter$ = this.store.select('app')
  .pipe(
    map(e => e.counter)
  );

  decrementarContador() {
    this.store.dispatch(decrementaContador())
  }
  incrementarContador() {
    this.store.dispatch(incrementaContador())
  }
}



