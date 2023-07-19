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
export interface IUserChange {
  password: string;
}
