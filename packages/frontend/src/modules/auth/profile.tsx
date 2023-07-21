/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { useFormik } from 'formik';
import { AuthContainer, AuthInput, Button, FormStyled, Label, Link, Title, LinkWraper } from './index.styled';
import { UserSchemaChange } from '../todo/schemas/user.schema';
import { IUserChange } from '../common/types/user.type';
import { useChangePass } from './hooks/useCangePass';
import { useLogOut } from './hooks/useLogOut';

const ProfilePageContainer = () => {
  const mutation = useChangePass();
  const logout = useLogOut();
  const handleLogOut = () => {
    logout.mutate();
  };
    const handeleSubmit = (values:IUserChange) => {
      mutation.mutate(values);
    };
    const formValues = {
        password: '',
      };

      const formik = useFormik({
        initialValues: formValues,
        onSubmit: handeleSubmit,
        validationSchema: UserSchemaChange
      });
return <AuthContainer>
  <FormStyled onSubmit={formik.handleSubmit}>
    <Title>Change password</Title>
    <Label htmlFor="password">
      New Password
      <AuthInput
        type="password"
        name="password"
        id="password"
        required
        onChange={formik.handleChange}
        value={formik.values.password}
      />
    </Label>
    <Button type="submit">Change</Button>
  </FormStyled>
  <LinkWraper>
    <Button onClick={handleLogOut}>LogOut</Button>
    <Link to="/todos">Back to list</Link>
  </LinkWraper>

</AuthContainer>;
};
export default ProfilePageContainer;
