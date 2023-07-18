/* eslint-disable prettier/prettier */
import React from 'react';
import {
  CheckboxContainer,
  Checkmark,
  CheckboxInput,
  CheckmarkCircle,
} from './checkbox.styled';

interface IProps {
  name: string;
  value: boolean;
  onChange: Function;
}
export const FormCustomChecbox: React.FC<IProps> = ({
  value,
  name,
  onChange,
}) => (
  <CheckboxContainer>
    <CheckboxInput
      type="checkbox"
      value={value}
      name={name}
      onChange={onChange}
    />
    <Checkmark>
      <CheckmarkCircle />
    </Checkmark>
  </CheckboxContainer>
);
