import { Response, Request, NextFunction } from 'express';
import TodoService from '../services/todo.service';
import { ErrorWithStatus } from '../types/error.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async getAllTodo(_: Request, res: Response) {
    const todos = await this.todoService.findAll();
    res.send(todos);
  }

  async getByIdTodo(req: Request, res: Response) {
    try{
    const todos = await this.todoService.findById(req.params.todoId);
    res.send(todos);}
    catch(err){
      const e = err as ErrorWithStatus
      res.status(e.status).json(e.message)
    }
  }

  async createTodo(req: Request, res: Response) {
   
    const todos = await this.todoService.create(req.body);
    res.send(todos);
  }
  

  async updateByIdTodo(req: Request, res: Response) {
   
    const todos = await this.todoService.update(req.params.todoId, req.body);
    res.send(todos);

  }

  async deleteByIdTodo(req: Request, res: Response) {
    
    const todos = await this.todoService.delete(req.params.todoId);
    res.send(todos);
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;
