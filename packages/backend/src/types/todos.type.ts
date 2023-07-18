// TODO: Put a real interfaces here

import { IUser } from './user.type';

export interface ITodo {
  title: string;
  description: string;
  isDone: boolean;
  isPrivate: boolean;
  ownerId: string;
}
export interface ITodoUser {
  title: string;
  description: string;
  isDone: boolean;
  isPrivate: boolean;
  user: IUser;
}
