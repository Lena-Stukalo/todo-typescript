/* eslint-disable prettier/prettier */
import React from 'react';
import { ButtonStyled } from './button.styled';

interface IProps {
  text: string;
  onClick?: Function;
  type:string;
  disabled?:boolean;
}
export const Button: React.FC<IProps> = ({ text, onClick, type, disabled }) => (
  <ButtonStyled onClick={onClick} type={type} disabled={disabled}>{text}</ButtonStyled>
);
