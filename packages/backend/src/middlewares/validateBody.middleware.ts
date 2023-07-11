import { NextFunction, Request, Response } from 'express';
import { todoSchema } from '../schemas/todo.shema';
import { RequestError } from '../helpers/RequestError';

export const validateBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = todoSchema.validate(req.body);
    if (error) {
      throw error;
    }
    next();
  } catch (error: any) {
    const e = RequestError(400, error.message);
    res.status(e.status).json(e.message);
  }
};
