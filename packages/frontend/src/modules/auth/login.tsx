/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, Link, LinkWraper } from './index.styled';
import { UserSchemaLog } from '../todo/schemas/user.schema';
import { useLogUser } from './hooks/useLogUser';
import { IUserLog } from '../common/types/user.type';
import { LoginForm } from './components/authForms/login-form.component';

const LoginPageContainer = () => {
  const mutation = useLogUser();
    const handeleSubmit = (values:IUserLog) => {
      mutation.mutate(values);
    };
    const formValues = {
        email: '',
        password: '',
      };

      const formik = useFormik({
        initialValues: formValues,
        onSubmit: handeleSubmit,
        validationSchema: UserSchemaLog
      });
return <AuthContainer>
  <LoginForm handleSubmit={formik.handleSubmit} values={formik.values} handleChange={formik.handleChange} />
  <LinkWraper>
    <Link to="/register">Go to SignUp</Link>
    <Link to="/forgot">Forgot password</Link>
  </LinkWraper>

</AuthContainer>;
};
export default LoginPageContainer;
