/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

export const isExist =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { id } = req.params;
        const result = await Entitys.findOneBy({ id } as unknown as FindOptionsWhere<T>);
        if (!result) {
          throw new Error('Not found');
        }
        next();
      } catch (error) {
        let e = error as ErrorWithStatus;
        e = RequestError(404, e.message);
        res.status(e.status).json(e.message);
      }
    };
