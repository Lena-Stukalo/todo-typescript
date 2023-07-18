/* eslint-disable prettier/prettier */
import { NextFunction, Response, Request } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';
import { IUser } from '../types/user.type';

export const isVerifyExist =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { Token } = req.params;
        const result = await Entitys.findOneBy({ verificationToken: Token } as unknown as FindOptionsWhere<T>);
        if (!result) {
          throw new Error('Not found');
        }
         req.body.user = result as unknown as IUser;
        next();
      } catch (error) {
        let e = error as ErrorWithStatus;
        e = RequestError(404, e.message);
        res.status(e.status).json(e.message);
      }
    };
