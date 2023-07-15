/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  position: relative;
  cursor: pointer;
  right: 40px;
`;

const HiddenCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const Checkmark = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 20px;
  width: 40px;
  background-color: #000; /* Початковий колір фону */
  border-radius: 10px;
  transition: background-color 0.3s ease;
`;

export const CheckmarkCircle = styled.span`
  position: absolute;
  top: 2px;
  left: 2px;
  height: 16px;
  width: 16px;
  background-color: #fff; /* Колір кола */
  border-radius: 50%;
  transition: transform 0.3s ease;
`;

export const Checkbox = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

export const CheckboxInput = styled(HiddenCheckbox)`
  &:checked ~ ${Checkmark} {
    background-color: #56fc93; /* Зелений колір фону */
  }

  &:checked ~ ${Checkmark} ${CheckmarkCircle} {
    transform: translateX(125%); /* Рухаємо коло в протилежний бік */
  }
`;
