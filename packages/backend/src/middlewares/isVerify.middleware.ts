/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { IUser } from '../types/user.type';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

export const isVerify =
<T extends BaseEntity>(Entitys: typeof BaseEntity) =>
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const result = await Entitys.findOneBy({ email } as unknown as FindOptionsWhere<T>) as unknown as IUser;
    if (!result || !result.verify) {
      throw new Error('Email or password wrong');
    }
    req.body.user = result as unknown as IUser;
    next();
  } catch (error) {
    let e = error as ErrorWithStatus;
    e = RequestError(401, e.message);
    res.status(e.status).json(e.message);
  }
};
