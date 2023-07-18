/* eslint-disable prettier/prettier */
import { useMutation, useQueryClient } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { ITodoNotId } from '../../common/types/todo.types';
import { APP_KEYS } from '../../common/consts';

interface IConfig {
  id: string;
  todo: ITodoNotId;
}

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (config: IConfig) => todoService.updateTodo(config.id, config.todo),
    onSuccess: () => queryClient.removeQueries([APP_KEYS.QUERY_KEYS.TODO])
  });
  return mutation;
};
