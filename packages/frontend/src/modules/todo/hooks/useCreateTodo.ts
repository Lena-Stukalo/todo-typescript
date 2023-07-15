/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../../../service/todo.service';
import { ITodoNotId } from '../../common/types/todo.types';

export const useCreateTodo = () => {
  const todoService = new TodoService('http://localhost:4200', 'api');
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (todo: ITodoNotId) => todoService.createTodo(todo),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['todos'] }),
  });
  return mutation;
};
