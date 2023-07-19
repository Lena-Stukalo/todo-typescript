/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { AuthInput, Button, FormStyled, Label, Title } from './auth-form.styled';
import { IUserLog } from '../../../common/types/user.type';

interface IProps {
    handleSubmit: Function;
    handleChange:Function
    values: IUserLog
  }
export const LoginForm: React.FC<IProps> = ({ handleChange, handleSubmit, values }) => <FormStyled onSubmit={handleSubmit}>
  <Title>Sign In</Title>
  <Label htmlFor="email">
    E-mail
    <AuthInput
      type="text"
      name="email"
      id="email"
      required
      onChange={handleChange}
      value={values.email}
    />
  </Label>
  <Label htmlFor="password">
    Password
    <AuthInput
      type="password"
      name="password"
      id="password"
      required
      onChange={handleChange}
      value={values.password}
    />
  </Label>
  <Button type="submit">Login</Button>
</FormStyled>;
