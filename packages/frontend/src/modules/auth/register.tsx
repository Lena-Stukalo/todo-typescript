/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, Link, LinkWraper } from './index.styled';
import { UserSchema } from '../todo/schemas/user.schema';
import { useRegUser } from './hooks/useRegUser';
import { IUserReg } from '../common/types/user.type';
import { RegisterForm } from './components/authForms/register-form.component';

const RegisterPageContainer = () => {
  const mutation = useRegUser();
    const handeleSubmit = (values:IUserReg) => {
      mutation.mutate(values);
    };
    const formValues = {
        name: '',
        email: '',
        password: '',
      };

      const formik = useFormik({
        initialValues: formValues,
        onSubmit: handeleSubmit,
        validationSchema: UserSchema
      });
return <AuthContainer>
  <RegisterForm handleSubmit={formik.handleSubmit} values={formik.values} handleChange={formik.handleChange} />
  <LinkWraper>
    <Link to="/login">Go to SignIn</Link>
    <Link to="/forgot">Forgot password</Link>
  </LinkWraper>
</AuthContainer>;
};
export default RegisterPageContainer;
