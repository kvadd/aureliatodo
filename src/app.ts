import { HttpClient, json } from 'aurelia-fetch-client';

import { Todo } from './todo';

export class App {
    
    public heading = 'Todo Application';
    public todos = [];
    public todoDescription = '';

    private activate(): void {
        this.todos = this.getLocalStorageTodos();
        if (!this.todos) {
            this.todos = [];
        }
    }

    private getLocalStorageTodos(): Todo[] {
        return JSON.parse(localStorage.getItem('todos'))
    }

    public setLocalStorageTodos(todo?: Todo): boolean {
        if (todo) {
            todo.done = !todo.done;
        }
        localStorage.setItem('todos', JSON.stringify(this.todos));
        console.log('sparar');
        return true;
    }

    public addTodo(): void {
        if (this.todoDescription) {
            this.todos.push(new Todo(this.todoDescription));
            this.todoDescription = '';
            this.setLocalStorageTodos();
        }
    }
    
    public removeTodo(todo): void {
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos.splice(index, 1);
            this.setLocalStorageTodos();
        }
    }
}
