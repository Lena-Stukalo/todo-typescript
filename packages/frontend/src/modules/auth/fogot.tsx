/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, AuthInput, Button, FormStyled, Label, Link, Title } from './index.styled';
import { UserSchemaLog } from '../todo/schemas/user.schema';
import { IUserReset } from '../common/types/user.type';
import { useResetPass } from './hooks/useResetPass';

const ForgotPageContainer = () => {
  const mutation = useResetPass();
    const handeleSubmit = (values:IUserReset) => {
      mutation.mutate(values);
    };
    const formValues = {
        email: '',
      };

      const formik = useFormik({
        initialValues: formValues,
        onSubmit: handeleSubmit,
        validationSchema: UserSchemaLog
      });
return <AuthContainer>
  <FormStyled onSubmit={formik.handleSubmit}>
    <Title>Reset password</Title>
    <Label htmlFor="email">
      Email
      <AuthInput
        type="text"
        name="email"
        id="email"
        required
        onChange={formik.handleChange}
        value={formik.values.email}
      />
    </Label>
    <Button type="submit">Reset</Button>
  </FormStyled>
  <Link to="/login">Back to Login</Link>
</AuthContainer>;
};
export default ForgotPageContainer;
