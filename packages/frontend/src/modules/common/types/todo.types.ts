export interface ITodo {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  isPrivate: boolean;
}
export interface ITodoNotId {
  title: string;
  description: string;
  isDone: boolean;
  isPrivate: boolean;
}
