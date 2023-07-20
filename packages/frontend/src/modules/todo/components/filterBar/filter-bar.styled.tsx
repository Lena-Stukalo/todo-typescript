import styled from 'styled-components';
import * as theme from '../../../theme';

export const Bar = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ChecboxLabel = styled.label`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 5px;
  @media (min-width: 481px) {
    flex-direction: column;
    width: 20%;
  }
`;
export const ChecboxSpan = styled.span`
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: ${theme.COLORS.darckGray};
`;
export const Form = styled.form`
  padding-bottom: 0;
  font-family: ${theme.FONTS.WEIGHTS.normal};
  width: 100%;
  margin-right: 5px;
  @media (min-width: 481px) {
    display: flex;
    justify-content: space-between;
  }
`;
