/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import * as theme from '../../../../theme';

export const CheckBoxLabel = styled('label')`
  display: flex;
  position: relative;
  justify-content: space-between;
`;
export const Button = styled('button')`
  width: 100px;
  height: 30px;
  left: 20px;
  color: #ffffff;
  border: 1px solid #28abe8;
  border-radius: 5px;
  background-color: #28abe8;
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;

  &:hover {
    background: #ffffff;
    border: 1px solid #28abe8;
    color: #28abe8;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const Wraper = styled('div')`
  display: flex;
  position: relative;
  justify-content: space-around;
`;
