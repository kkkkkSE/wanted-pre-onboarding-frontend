import { apiService } from '../services/apiService';

import { TodoItem } from '../types';

import Store from './Store';

export default class TodoStore extends Store {
  todo = '';

  todoList: TodoItem[] = [];

  errorMessage = '';

  changeTodo(todo: string) {
    this.todo = todo;

    this.publish();
  }

  resetTodo() {
    this.todo = '';

    this.publish();
  }

  setTodoList(todoList: TodoItem[]) {
    this.todoList = todoList;

    this.errorMessage = '';

    this.publish();
  }

  addTodoItem(todoItem: TodoItem) {
    this.todoList.push(todoItem);

    this.publish();
  }

  updateTodoItem(todoItem: TodoItem) {
    const index = this.todoList.findIndex((item) => item.id === todoItem.id);

    this.todoList[index] = todoItem;

    this.publish();
  }

  deleteTodoItem(id: number) {
    this.todoList = this.todoList.filter((item) => item.id !== id);

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

  async createTodo(todo : string) {
    try {
      const todoItem = await apiService.createTodo({ todo });

      this.addTodoItem(todoItem);
      this.resetTodo();
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
      const todoItem = await apiService.updateTodo({ id, todo, isCompleted });

      this.updateTodoItem(todoItem);
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
