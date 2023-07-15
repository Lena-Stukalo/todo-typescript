/* eslint-disable prettier/prettier */
import React from 'react';
import {
  CheckboxContainer,
  Checkmark,
  CheckboxInput,
  CheckmarkCircle,
} from './checkbox.styled';

interface IProps {
  isTrue?: boolean;
  isAble?: boolean;
  onChange?: Function;
  name?: string;
}
export const CustomChecbox: React.FC<IProps> = ({
  isTrue,
  isAble,
  name,
  onChange,
}) => (
  <CheckboxContainer>
    <CheckboxInput
      type="checkbox"
      checked={isTrue}
      disabled={!isAble}
      name={name}
      value={isTrue}
      onChange={onChange}
    />
    <Checkmark>
      <CheckmarkCircle />
    </Checkmark>
  </CheckboxContainer>
);
