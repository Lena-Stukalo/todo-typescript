/* eslint-disable prettier/prettier */
import { useQuery } from 'react-query';
import { TodoService } from '../../../service/todo.service';

export const useGetTodoById = (id: string) => {
  const todoService = new TodoService('http://localhost:4200', 'api');
  const get = async () => {
    const { data } = await todoService.geTodo(id);
    return data;
  };
  const { data, isError, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: get,
  });
  return { data, isError, isLoading };
};
