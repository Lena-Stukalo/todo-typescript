import { Response, Request } from 'express';
import TodoService from '../services/todo.service';

export class TodoController {
  // eslint-disable-next-line prettier/prettier
  constructor(private todoService: TodoService) { }

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();
    res.send(todos);
  }

  async getByIdTodo(req: Request, res: Response) {
    const todos = await this.todoService.findById(req.params.id);
    res.send(todos);
  }

  async createTodo(req: Request, res: Response) {
    const todos = await this.todoService.create(req.body);
    res.send(todos);
  }

  async updateByIdTodo(req: Request, res: Response) {
    const todos = await this.todoService.update(req.params.id, req.body);
    res.send(todos);
  }

  async deleteByIdTodo(req: Request, res: Response) {
    const todos = await this.todoService.delete(req.params.id);
    res.send(todos);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
