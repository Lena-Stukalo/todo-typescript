import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';
import { RequestError } from '../helpers/RequestError';

export const validateBody =
  (Shema: Joi.ObjectSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = Shema.validate(req.body);
      if (error) {
        throw error;
      }
      next();
    } catch (error: any) {
      const e = RequestError(400, error.message);
      res.status(e.status).json(e.message);
    }
  };
