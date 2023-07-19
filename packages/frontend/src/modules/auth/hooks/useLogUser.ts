/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useMutation } from 'react-query';
import { Notify } from 'notiflix';
import { userService } from '../../../service/user.service';
import { IUserLog } from '../../common/types/user.type';
import { APP_KEYS } from '../../common/consts';

interface IRes {
    data:{
        token: string
    }
}

interface IResErr {
    response:{
      data:string
    }
}
export const useLogUser = () => {
  const mutation = useMutation({
    mutationFn: async (user: IUserLog) => userService.login(user),
    onSuccess: (res:IRes) => {
        localStorage.setItem(APP_KEYS.STORAGE_KEYS.TOKEN, res.data.token);
        userService.setToken(res.data.token);
        window.location.reload();
},
onError: (res:IResErr) => {
  Notify.failure(res.response.data);
},
  });
  return mutation;
};
