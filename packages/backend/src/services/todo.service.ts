/* eslint-disable no-continue */
/* eslint-disable guard-for-in */
import { IUser } from '../types/user.type';
import { Todo } from '../entities/todo.entity';
import { ITodo, ITodoUser } from '../types/todos.type';
import { IParam, IParams, ISerch } from '../types/params.type';

export default class TodoService {
  async findAll(user: IUser, params: IParams) {
    const { page = 0, limits = 3 } = params;
    const pagin = { page: Number(page), limits: Number(limits) };
    const { isDone, isPrivate } = params;
    const param = { isDone, isPrivate } as unknown as IParam;
    const serch: ISerch = {};
    for (const key in param) {
      if (!param[key]) {
        continue;
      }
      if (param[key] === 'false') {
        serch[key] = false;
      } else {
        serch[key] = true;
      }
    }
    const result = await Todo.find({
      where: [{ ownerId: user.id, ...serch }],
      skip: pagin.page * pagin.limits,
      take: pagin.limits
    });
    return result;
  }

  async findById(id: string) {
    const result = await Todo.findOneBy({ id });
    return result;
  }

  async create(data: ITodoUser) {
    const result = await Todo.create({ ...data, ownerId: data.user.id });
    result.save();
    return result;
  }

  async update(id: string, data: ITodo) {
    const result = await Todo.update(id, data);
    return result;
  }

  async delete(id: string) {
    const result = await Todo.delete(id);
    return result;
  }
}
