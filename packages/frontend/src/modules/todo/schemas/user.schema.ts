/* eslint-disable no-useless-escape */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import * as yup from 'yup';

const emailRule = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const UserSchema = yup.object().shape({
  name: yup.string().required('Required!'),
  email: yup.string().matches(emailRule).required('Required!'),
  password: yup.string().required('Required!'),
});
export const UserSchemaLog = yup.object().shape({
  email: yup.string().matches(emailRule).required('Required!'),
  password: yup.string().required('Required!'),
});
export const UserSchemaChange = yup.object().shape({
  password: yup.string().required('Required!'),
});
export const UserSchemaReset = yup.object().shape({
  email: yup.string().matches(emailRule).required('Required!'),
});
