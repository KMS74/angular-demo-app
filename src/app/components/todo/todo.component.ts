import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  todo: string = '';
  todos: string[] = [];
  addTodo() {
    if (this.todo.length > 0) {
      this.todos.push(this.todo);
    }
    this.todo = '';
  }
  deleteTodo(todoItem: string) {
    this.todos = this.todos.filter((todo) => todo != todoItem);
  }
}
