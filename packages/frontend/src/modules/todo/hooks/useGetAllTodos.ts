/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { APP_KEYS } from '../../common/consts';

export const useGetAllTodos = () => {
  const get = async () => {
    const { data } = await todoService.getAllTodos();
    return data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: get,
  });
  return { data, isError, isLoading };
};
