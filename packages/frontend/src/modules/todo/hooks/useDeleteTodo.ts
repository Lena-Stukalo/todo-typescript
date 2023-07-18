/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { APP_KEYS } from '../../common/consts';

export const useDeleteTodo = () => {
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
      onSuccess: () => queryClient.removeQueries([APP_KEYS.QUERY_KEYS.TODOS])
    }
  );
  return mutation;
};
