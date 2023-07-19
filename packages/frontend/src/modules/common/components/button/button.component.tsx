/* eslint-disable prettier/prettier */
import React from 'react';
import { ButtonStyled } from './button.styled';

interface IProps {
  text: string;
  onClick?: Function;
  type:string;
}
export const Button: React.FC<IProps> = ({ text, onClick, type }) => (
  <ButtonStyled onClick={onClick} type={type}>{text}</ButtonStyled>
);
