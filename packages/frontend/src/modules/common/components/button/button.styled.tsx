/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import * as theme from '../../../theme';

export const ButtonStyled = styled('button')`
  margin: 20px auto 0 auto;
  width: 100px;
  height: 30px;
  color: #ffffff;
  border: 1px solid #28abe8;
  border-radius: 5px;
  background-color: #28abe8;
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  display: block;

  &:hover {
    background: #ffffff;
    border: 1px solid #28abe8;
    color: #28abe8;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
