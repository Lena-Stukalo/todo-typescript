/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { APP_KEYS } from '../../common/consts';

export const useGetTodoById = (id: string) => {
  const get = async () => {
    const { data } = await todoService.geTodo(id);
    return data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODO],
    queryFn: get,
  });
  return { data, isError, isLoading };
};
