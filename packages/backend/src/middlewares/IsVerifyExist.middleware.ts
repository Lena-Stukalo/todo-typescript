/* eslint-disable prettier/prettier */
import { NextFunction, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestWithUser } from '../types/request.type';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

export const isVerifyExist =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
    async (req: Partial<RequestWithUser>, res: Response, next: NextFunction) => {
      try {
        const { verificationToken } = req.params;
        const result = await Entitys.findOneBy({ verificationToken } as unknown as FindOptionsWhere<T>);
        if (!result) {
          throw new Error('Not found');
        }
        req.user = result;
        next();
      } catch (error) {
        let e = error as ErrorWithStatus;
        e = RequestError(404, e.message);
        res.status(e.status).json(e.message);
      }
    };
