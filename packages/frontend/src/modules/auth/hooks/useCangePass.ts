/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useMutation } from 'react-query';
import { Notify } from 'notiflix';
import { userService } from '../../../service/user.service';
import { IUserChange } from '../../common/types/user.type';

interface IRes {
    data:{
        message: string
    }
}
export const useChangePass = () => {
  const mutation = useMutation({
    mutationFn: async (user: IUserChange) => userService.changePass(user),
    onSuccess: (res:IRes) => { Notify.success(`${res.data.message}`); },
  });
  return mutation;
};
