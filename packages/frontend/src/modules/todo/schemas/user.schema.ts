/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const UserSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  email: yup.string().required('Required!'),
  password: yup.string().required('Required!'),
});
