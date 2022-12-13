import { appReducer, decrementaContador, defineContador, IAppState, incrementaContador } from './store/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx';

  constructor(private store: Store<{ app: IAppState }>) { }

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
  definirContador(quantidade: string) {
    const valorTratado = parseInt(quantidade);
    this.store.dispatch(defineContador({payload:valorTratado}))
  }
}
