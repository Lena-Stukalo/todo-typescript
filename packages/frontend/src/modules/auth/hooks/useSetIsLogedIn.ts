/* eslint-disable prettier/prettier */
import { useQueryClient } from 'react-query';
import { APP_KEYS } from '../../common/consts';

export const useSetIsLogedIn = () => {
 const client = useQueryClient();
 client.setQueryData(APP_KEYS.QUERY_KEYS.LOG, (old) => {
    if (!old) {
        return true;
    }
        return false;
 });
};
