/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ITodoNotId } from '../modules/common/types/todo.types';
import { HttpSerivce } from './http.service';
import { APP_KEYS } from '../modules/common/consts';

export class TodoService extends HttpSerivce {
    constructor() {
        super();
    }

    async getAllTodos() {
        return this.get({
            url: APP_KEYS.BACKEND_KEYS.TODOS
        });
    }

    geTodo(id: string) {
        return this.get({
            url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
        });
    }

    updateTodo(id: string, todo: ITodoNotId) {
        return this.put({
            url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`,
            data: todo
        });
    }

    createTodo(todo: ITodoNotId) {
        return this.post({
            url: APP_KEYS.BACKEND_KEYS.TODOS,
            data: todo
        });
    }

    deleteTodo(id: string) {
        return this.delete({
            url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
        });
    }
}
export const todoService = new TodoService();
