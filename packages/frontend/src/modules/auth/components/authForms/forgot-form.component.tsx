/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import React from 'react';
import { AuthInput, Button, FormStyled, Label, Title } from './auth-form.styled';

interface IProps {
    handleSubmit: Function;
    handleChange:Function
    values: { email:string }
  }
export const ForgotForm: React.FC<IProps> = ({ handleChange, handleSubmit, values }) => <FormStyled onSubmit={handleSubmit}>
  <Title>Reset password</Title>
  <Label htmlFor="email">
    Email
    <AuthInput
      type="text"
      name="email"
      id="email"
      required
      onChange={handleChange}
      value={values.email}
    />
  </Label>
  <Button type="submit">Reset</Button>
</FormStyled>;
