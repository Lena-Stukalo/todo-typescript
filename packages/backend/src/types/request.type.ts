import { Request } from 'express';
import { IUser } from './user.type';

export interface RequestWithUser extends Request {
  user: IUser;
}
export type AuthRequest = RequestWithUser & {
  headers: { authorization: string };
};
