import { TodoComponent } from './todo/todo.component';
import { DetalhesUsuariosComponent } from './detalhes-usuarios/detalhes-usuarios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'detalhes-usuarios', component: DetalhesUsuariosComponent},
  {path: 'todos', component: TodoComponent},
  {path: '', pathMatch: 'full', redirectTo: 'todos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
