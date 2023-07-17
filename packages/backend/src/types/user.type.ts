// TODO: Put a real interfaces here

export interface IUserReg {
  name: string;
  email: string;
  password: string;
}
export interface IUserLog {
  email: string;
  password: string;
}
export interface IUserReset {
  email: string;
}
export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  verificationToken: string;
  verify: boolean;
}
