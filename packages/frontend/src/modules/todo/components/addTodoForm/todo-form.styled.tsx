/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import * as theme from '../../../theme';

export const ModalWrapper = styled.div`
  position: relative;
`;

export const ModalInput = styled.input`
  display: block;
  width: 100%;
  height: 30px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 12px 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: #000;
  font-size: ${theme.FONTS.SIZES.s};
`;

export const Label = styled.label`
  display: block;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #757575;
  margin-bottom: 4px;
`;
export const ChecboxLabel = styled.label`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #757575;
  margin-bottom: 20px;
`;

export const ModalTextarea = styled.input`
  display: block;
  resize: none;
  width: 100%;
  height: 60px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 12px 16px;
  color: #000;
  margin-bottom: 20px;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${theme.FONTS.SIZES.s};

  &::placeholder {
    font-size: ${theme.FONTS.SIZES.s};
    line-height: 1.17;
    letter-spacing: 0.01em;
    color: rgba(117, 117, 117, 0.5);
  }
`;

export const FormStyled = styled.form`
  padding-bottom: 0;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  width: 70%;
`;
export const Button = styled.button`
  width: 100px;
  height: 30px;
  left: 20px;
  color: #ffffff;
  border: 1px solid #28abe8;
  border-radius: 5px;
  background-color: #28abe8;
  font-size: ${theme.FONTS.SIZES.s};
  text-align: center;
  margin: 0 auto;

  &:hover {
    background: #ffffff;
    border: 1px solid #28abe8;
    color: #28abe8;
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const Title = styled.h3`
  font-family: ${theme.FONTS.WEIGHTS.bold};
  font-size: ${theme.FONTS.SIZES.m};
  text-align: center;
  margin-bottom: 20px;
`;
