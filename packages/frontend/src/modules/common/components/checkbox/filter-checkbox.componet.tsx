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
  value: string;
  onChange: Function;
  checked: boolean;
  disabled: boolean;

}
export const FilterCustomChecbox: React.FC<IProps> = ({
  value,
  name,
  onChange,
  checked,
  disabled
}) => (
  <CheckboxContainer>
    <CheckboxInput
      type="checkbox"
      value={value}
      name={name}
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
    <Checkmark>
      <CheckmarkCircle />
    </Checkmark>
  </CheckboxContainer>
);
