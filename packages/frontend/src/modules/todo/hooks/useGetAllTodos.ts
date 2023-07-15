/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';
import { TodoService } from '../../../service/todo.service';

export const useGetAllTodos = () => {
  const todoService = new TodoService('http://localhost:4200', 'api');
  const get = async () => {
    const { data } = await todoService.getAllTodos();
    return data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ['todos'],
    queryFn: get,
  });
  return { data, isError, isLoading };
};
