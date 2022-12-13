import { TodosResolver } from './pages/todos/todos.resolver';
import { TodosComponent } from './pages/todos/todos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './pages/posts/posts.component';

const routes: Routes = [
  {path: "", pathMatch:'full', redirectTo: "todos"},
  {path: "todos", component: TodosComponent, resolve: {todos: TodosResolver}},
  {path: "posts", component: PostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
