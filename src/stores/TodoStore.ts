import { apiService } from '../services/apiService';

import { TodoItem } from '../types';

import Store from './Store';

export default class TodoStore extends Store {
  newTodo = '';

  todoList: TodoItem[] = [];

  errorMessage = '';

  changeTodo(todo: string) {
    this.newTodo = todo;

    this.publish();
  }

  resetNewTodo() {
    this.newTodo = '';

    this.publish();
  }

  setTodoList(todoList: TodoItem[]) {
    this.todoList = todoList;

    this.errorMessage = '';

    this.publish();
  }

  addTodoItem(todoItem: TodoItem) {
    this.todoList.push(todoItem);

    this.errorMessage = '';

    this.publish();
  }

  updateTodoItem(todoItem: TodoItem) {
    const index = this.todoList.findIndex((item) => item.id === todoItem.id);

    this.todoList[index] = todoItem;

    this.errorMessage = '';

    this.publish();
  }

  deleteTodoItem(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);

    this.errorMessage = '';

    this.publish();
  }

  setErrorMessage(message: string) {
    this.errorMessage = message;

    this.publish();
  }

  async fetchTodoList() {
    try {
      const todoList = await apiService.getTodos();

      this.setTodoList(todoList);
    } catch (e) {
      this.setErrorMessage('데이터 요청 실패');
    }
  }

  async createTodo() {
    try {
      if (this.newTodo) {
        const todoItem = await apiService.createTodo({ todo: this.newTodo });

        this.addTodoItem(todoItem);
        this.resetNewTodo();
      }
    } catch (e) {
      this.setErrorMessage('추가 실패');
    }
  }

  async updateTodo(
    id: number,
    todo: string,
    isCompleted: boolean,
  ) {
    try {
      if (todo) {
        const todoItem = await apiService.updateTodo({ id, todo, isCompleted });

        this.updateTodoItem(todoItem);
      }
    } catch (e) {
      this.setErrorMessage('수정 실패');
    }
  }

  async deleteTodo(id : number) {
    try {
      await apiService.deleteTodo({ id });

      this.deleteTodoItem(id);
    } catch (e) {
      this.setErrorMessage('추가 실패');
    }
  }
}

export const todoStore = new TodoStore();
