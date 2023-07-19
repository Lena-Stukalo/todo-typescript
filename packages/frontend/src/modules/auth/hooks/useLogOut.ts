/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import { useMutation } from 'react-query';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { userService } from '../../../service/user.service';
import { APP_KEYS } from '../../common/consts';

export const useLogOut = () => {
  const mutation = useMutation({
    mutationFn: async () => userService.logOut(),
    onSuccess: () => {
        localStorage.removeItem(APP_KEYS.STORAGE_KEYS.TOKEN);
        userService.unSetToken();
        window.location.reload();
        Notify.success('Log out success.');
},
  });
  return mutation;
};
