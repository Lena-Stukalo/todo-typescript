/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { ITodoNotId } from '../../common/types/todo.types';
import { APP_KEYS } from '../../common/consts';

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (todo: ITodoNotId) => todoService.createTodo(todo),
    onSuccess: () => queryClient.removeQueries({ queryKey: [APP_KEYS.QUERY_KEYS.TODOS] }),
  });
  return mutation;
};
