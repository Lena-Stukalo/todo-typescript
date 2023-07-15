/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../../../service/todo.service';
import { ITodoNotId } from '../../common/types/todo.types';

interface IConfig {
  id: string;
  todo: ITodoNotId;
}

export const useUpdateTodo = () => {
  const todoService = new TodoService('http://localhost:4200', 'api');
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (config: IConfig) => todoService.updateTodo(config.id, config.todo),
    onSuccess: () => queryClient.invalidateQueries(['todo'])
  });
  return mutation;
};
