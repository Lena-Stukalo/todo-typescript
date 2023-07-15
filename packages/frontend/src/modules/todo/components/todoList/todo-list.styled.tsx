/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled('ul')`
  max-width: 400px;
  margin: 0 auto;
  display: block;
`;
export const Wraper = styled('li')`
  padding: 10px;
  margin-bottom: 30px;
`;
export const StyledNavLink = styled(NavLink)`
text-decoration: none;
color: #000000;
`;
