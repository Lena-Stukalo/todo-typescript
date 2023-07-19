/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, AuthInput, Button, FormStyled, Label, Link, Title, LinkWraper } from './index.styled';
import { UserSchemaLog } from '../todo/schemas/user.schema';
import { useLogUser } from './hooks/useLogUser';
import { IUserLog } from '../common/types/user.type';

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
  <FormStyled onSubmit={formik.handleSubmit}>
    <Title>Sign In</Title>
    <Label htmlFor="email">
      E-mail
      <AuthInput
        type="text"
        name="email"
        id="email"
        required
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </Label>
    <Label htmlFor="password">
      Password
      <AuthInput
        type="password"
        name="password"
        id="password"
        required
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </Label>
    <Button type="submit">Login</Button>
  </FormStyled>
  <LinkWraper>
    <Link to="/register">Go to SignUp</Link>
    <Link to="/todos">Forgot password</Link>
  </LinkWraper>

</AuthContainer>;
};
export default LoginPageContainer;
