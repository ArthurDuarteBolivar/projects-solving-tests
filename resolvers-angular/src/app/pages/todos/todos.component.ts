import { Todo } from './todos.resolver';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  constructor(private route: ActivatedRoute){}

  todos: {success?:Todo[], error?: string} = this.route.snapshot.data['todos'];
}
