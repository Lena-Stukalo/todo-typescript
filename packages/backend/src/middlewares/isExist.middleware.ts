
import { RequestError } from '../helpers/RequestError';
import { NextFunction, Request, Response } from 'express';
import { Todo } from '../entities/todo.entity';


  export const isExist = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const result= await Todo.findOneBy({id:req.params.todoId})
        if(!result){
            throw new Error("Not found");
        }
        next();
      }
      catch(error:any) {
        const e = RequestError(404, error.message);
        res.status(e.status).json(e.message)
      }
  };

  