/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { TodoService } from '../../../service/todo.service';

export const useDeleteTodo = () => {
  const todoService = new TodoService('http://localhost:4200', 'api');
  const deletion = async (id: string) => {
    const { data } = await todoService.deleteTodo(id);
    return data;
  };
  const queryClient = useQueryClient();
  const mutation = useMutation(
    async (id: string) => {
      await deletion(id);
    },
    {
      onSuccess: () => queryClient.invalidateQueries(['todos'])
    }
  );
  return mutation;
};
