import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayContadorComponent } from './display-contador/display-contador.component';
import { StoreModule } from '@ngrx/store';
import { appInitalState, appReducer } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DetalhesUsuariosComponent } from './detalhes-usuarios/detalhes-usuarios.component';
import { TodoComponent } from './todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffectService } from './store/todo.effect.service';


@NgModule({
  declarations: [
    AppComponent,
    DisplayContadorComponent,
    DetalhesUsuariosComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    HttpClientModule,
    EffectsModule.forRoot([TodoEffectService])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
