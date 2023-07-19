/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, AuthInput, Button, FormStyled, Label, Link, LinkWraper, Title } from './index.styled';
import { UserSchema } from '../todo/schemas/user.schema';
import { useRegUser } from './hooks/useRegUser';
import { IUserReg } from '../common/types/user.type';

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
  <FormStyled onSubmit={formik.handleSubmit}>
    <Title>Sign Up</Title>
    <Label htmlFor="name">
      Name
      <AuthInput
        type="text"
        name="name"
        id="name"
        required
        onChange={formik.handleChange}
        value={formik.values.name}
      />
    </Label>
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
    <Button type="submit">Register</Button>
  </FormStyled>
  <LinkWraper>
    <Link to="/login">Go to SignIn</Link>
    <Link to="/forgot">Forgot password</Link>
  </LinkWraper>
</AuthContainer>;
};
export default RegisterPageContainer;
