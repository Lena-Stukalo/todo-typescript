import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { BaseEntity, FindOptionsWhere } from 'typeorm';
import { IUser } from '../types/user.type';
import { RequestError } from '../helpers/RequestError';
import { ErrorWithStatus } from '../types/error.type';

interface JwtPayload {
  id: string;
}
export const authenticate =
  <T extends BaseEntity>(Entitys: typeof BaseEntity) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new Error('Unauthorized');
      }
      const [bearer, token] = authorization.split(' ');
      if (bearer !== 'Bearer') {
        throw new Error('Unauthorized');
      }
      const { id } = jwt.verify(token, process.env.SECRET_KEY!) as JwtPayload;
      const user = (await Entitys.findOneBy({
        id
      } as unknown as FindOptionsWhere<T>)) as unknown as IUser;
      if (!user || user.token !== token) {
        throw new Error('Unauthorized');
      }
      req.body.user = user;
      next();
    } catch (error) {
      let e = error as ErrorWithStatus;
      e = RequestError(401, e.message);
      res.status(e.status).json(e.message);
    }
  };
