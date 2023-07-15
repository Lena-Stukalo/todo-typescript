/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ITodoNotId } from '../modules/common/types/todo.types';
import { HttpSerivce } from './http.service';

export class TodoService extends HttpSerivce {
    constructor(baseUrl: string, apiVersion: string) {
        super(baseUrl, apiVersion);
    }

    async getAllTodos() {
        return this.get({
            url: 'todos'
        });
    }

    geTodo(id: string) {
        return this.get({
            url: `todos/${id}`
        });
    }

    updateTodo(id: string, todo: ITodoNotId) {
        return this.put({
            url: `todos/${id}`,
            data: todo
        });
    }

    createTodo(todo: ITodoNotId) {
        return this.post({
            url: 'todos',
            data: todo
        });
    }

    deleteTodo(id: string) {
        return this.delete({
            url: `todos/${id}`
        });
    }
}
