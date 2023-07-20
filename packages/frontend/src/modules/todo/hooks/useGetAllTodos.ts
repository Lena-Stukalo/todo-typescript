/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';
import { todoService } from '../../../service/todo.service';
import { APP_KEYS } from '../../common/consts';
import { TParam } from '../../common/types/params.type';

export const useGetAllTodos = (params?:TParam) => {
  const get = async () => {
    const { data } = await todoService.getAllTodos(params);
    return data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.TODOS],
    queryFn: get,
  });
  return { data, isError, isLoading };
};
