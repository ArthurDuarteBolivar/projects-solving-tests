import { map } from 'rxjs';
import { IAppState } from './../store/app.state';
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-contador',
  templateUrl: './display-contador.component.html',
  styleUrls: ['./display-contador.component.scss']
})
export class DisplayContadorComponent {

  constructor(private store: Store<{app: IAppState}>){}

  counter$ = this.store.select('app').pipe(
    map(res => res.counter)
  )


}
