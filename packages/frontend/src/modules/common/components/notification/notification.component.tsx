/* eslint-disable prettier/prettier */
import React from 'react';

interface IProps {
  text: string;
}
export const Notification: React.FC<IProps> = ({ text }) => <div>{text}</div>;
