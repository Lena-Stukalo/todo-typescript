/* eslint-disable prettier/prettier */
import React from 'react';
import {
  CheckboxContainer,
  CheckmarkCircle,
  CheckmarkCard,
  CheckboxInputCard,
} from './checkbox.styled';

interface IProps {
  isTrue?: boolean;
  isAble?: boolean;
  onChange?: Function;
  name?: string;
}
export const CustomCheckbox: React.FC<IProps> = ({
  isTrue,
  isAble,
  name,
  onChange,
}) => (
  <CheckboxContainer>
    <CheckboxInputCard
      type="checkbox"
      checked={isTrue}
      disabled={!isAble}
      name={name}
      value={isTrue}
      onChange={onChange}
    />
    <CheckmarkCard>
      <CheckmarkCircle />
    </CheckmarkCard>
  </CheckboxContainer>
);
