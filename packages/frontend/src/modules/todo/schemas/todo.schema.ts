/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import * as yup from 'yup';

export const TodoSchema = yup.object().shape({
  title: yup.string().required('Required!'),
  description: yup.string().required('Required!'),
  isDone: yup.boolean().required('Required!'),
  isPrivate: yup.boolean().required('Required!'),
});
