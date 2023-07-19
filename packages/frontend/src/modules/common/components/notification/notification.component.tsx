/* eslint-disable prettier/prettier */
import React from 'react';
import { NotyfyStyled } from './notification.styled';

interface IProps {
  text: string;
}
export const Notification: React.FC<IProps> = ({ text }) => <NotyfyStyled>{text}</NotyfyStyled>;
