/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';
import { IUser } from '../types/user.type';

export const isPassWordValid =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { password, email } = req.body;
        const result = await Entitys.findOneBy({ email } as unknown as FindOptionsWhere<T>) as unknown as IUser;
        const passwordCompare = await bcrypt.compare(password, result.password);
    if (!passwordCompare) {
      throw Error('Email or password wrong');
    }
    req.body.id = result.id;
        next();
      } catch (error) {
        let e = error as ErrorWithStatus;
        e = RequestError(400, e.message);
        res.status(e.status).json(e.message);
      }
    };
