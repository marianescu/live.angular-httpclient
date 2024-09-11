import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent, NgFor, NgIf, AsyncPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {



  constructor(public todosService: TodosService){}
}
