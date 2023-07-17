/* eslint-disable prettier/prettier */
import { NextFunction, Request, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

interface IBaseEntity extends BaseEntity {
    verify:boolean
}
export const isVerify =
<T extends IBaseEntity>(Entitys: typeof BaseEntity) =>
async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body;
    const result = await Entitys.findOneBy({ email } as unknown as FindOptionsWhere<T>);
    if (!result || result.verify) {
      throw new Error('Email or password wrong');
    }
    next();
  } catch (error) {
    let e = error as ErrorWithStatus;
    e = RequestError(401, e.message);
    res.status(e.status).json(e.message);
  }
};
