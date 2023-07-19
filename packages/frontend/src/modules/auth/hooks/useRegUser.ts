/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useMutation } from 'react-query';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { userService } from '../../../service/user.service';
import { IUserReg } from '../../common/types/user.type';

interface IResErr {
  response:{
    data:string
  }
}
export const useRegUser = () => {
  const mutation = useMutation({
    mutationFn: async (user: IUserReg) => userService.register(user),
    onSuccess: () => Notify.info('Registretion success. Verify your email'),
    onError: (res:IResErr) => {
      Notify.failure(res.response.data);
    },
  });
  return mutation;
};
