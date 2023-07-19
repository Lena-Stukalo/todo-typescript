/* eslint-disable prettier/prettier */
import { useQueryClient } from 'react-query';
import { APP_KEYS } from '../../common/consts';

export const useGetIsLogedIn = () => {
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData(APP_KEYS.QUERY_KEYS.LOG);
  return data;
};
