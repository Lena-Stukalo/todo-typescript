import { IUser } from '../types/user.type';
import { Todo } from '../entities/todo.entity';
import { ITodo, ITodoUser } from '../types/todos.type';

export default class TodoService {
  async findAll(user: IUser) {
    const result = await Todo.findBy({ ownerId: user.id });
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
