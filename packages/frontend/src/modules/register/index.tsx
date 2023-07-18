/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, AuthInput, Button, FormStyled, Label, Title } from './index.styled';
import { UserSchema } from '../todo/schemas/user.schema';

const RegisterPageContainer = () => {
    const handeleSubmit = () => {

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
  <FormStyled>
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
        type="text"
        name="password"
        id="password"
        required
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </Label>
    <Button>Register</Button>
  </FormStyled>
</AuthContainer>;
};
export default RegisterPageContainer;
