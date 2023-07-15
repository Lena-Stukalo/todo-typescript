/* eslint-disable prettier/prettier */
import React from 'react';
import { ButtonStyled } from './button.styled';

interface IProps {
  text: string;
  onClick: Function;
}
export const Button: React.FC<IProps> = ({ text, onClick }) => (
  <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
);
