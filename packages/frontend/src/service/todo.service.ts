/* eslint-disable no-continue */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-useless-constructor */
import { ITodoNotId } from '../modules/common/types/todo.types';
import { HttpSerivce } from './http.service';
import { APP_KEYS } from '../modules/common/consts';
import { TParam } from '../modules/common/types/params.type';

export class TodoService extends HttpSerivce {
    constructor() {
        super();
    }

    createUrlWithParams(params?:TParam) {
        if (!params) {
            return '';
        }
        let paramsUrl = '';
        // eslint-disable-next-line guard-for-in, prefer-const
        for (let key in params) {
            if (params[key] === '') {
                continue;
            }
            if (paramsUrl.length === 0) {
                paramsUrl = `?${paramsUrl}${key}=${params[key]}`;
            } else {
                paramsUrl = `${paramsUrl}&${key}=${params[key]}`;
            }
        }
        return paramsUrl;
    }

    async getAllTodos(params?:TParam) {
       const paramsUrl = this.createUrlWithParams(params);
        return this.get({
            url: `${APP_KEYS.BACKEND_KEYS.TODOS}${paramsUrl}`
        });
    }

    geTodo(id: string) {
        return this.get({
            url: `${APP_KEYS.BACKEND_KEYS.TODOS}/${id}`
        });
    }

    updateTodo(id: string, todo: ITodoNotId) {
        return this.patch({
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
