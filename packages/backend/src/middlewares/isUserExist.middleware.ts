/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

export const isUserExist =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { email } = req.body;
        const result = await Entitys.findOneBy({ email } as unknown as FindOptionsWhere<T>);
        if (!result) {
          throw new Error('User not exist');
        }
        next();
      } catch (error) {
        let e = error as ErrorWithStatus;
        e = RequestError(400, e.message);
        res.status(e.status).json(e.message);
      }
    };
