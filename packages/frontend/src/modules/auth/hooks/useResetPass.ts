/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useMutation } from 'react-query';
import { Notify } from 'notiflix';
import { userService } from '../../../service/user.service';
import { IUserReset } from '../../common/types/user.type';

export const useResetPass = () => {
  const mutation = useMutation({
    mutationFn: async (user: IUserReset) => userService.sendReset(user),
    onSuccess: () => { Notify.success('Mail was sent on your email '); },
  });
  return mutation;
};
