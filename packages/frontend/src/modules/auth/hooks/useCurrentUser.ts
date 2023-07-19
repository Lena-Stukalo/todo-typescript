/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prettier/prettier */
import { useQuery, useQueryClient } from 'react-query';
import { userService } from '../../../service/user.service';
import { APP_KEYS } from '../../common/consts';

export const useCurrentUser = () => {
    const queryClient = useQueryClient();
    const token = localStorage.getItem('token') as string;
    const get = async () => {
            userService.setToken(token);
           const { data } = await userService.currentUser();
           return data;
        };
  const { data, isLoading } = useQuery({
    queryKey: [APP_KEYS.QUERY_KEYS.USER],
    queryFn: get,
    onSuccess: () => queryClient.setQueryData(APP_KEYS.QUERY_KEYS.LOG, true),
    onError: () => queryClient.setQueriesData(APP_KEYS.QUERY_KEYS.LOG, false),
    retry: 1,
  });
  return { data, isLoading };
};
