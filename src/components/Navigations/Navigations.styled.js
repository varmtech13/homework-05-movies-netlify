import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #0c0c0c;
  display: flex;
  align-items: center;
  column-gap: 7px;
  &.active {
    color: red;
  }
`;

export const Nav = styled.nav`
  padding: 20px 0;
  border-bottom: 1px solid #000;
  display: flex;
  gap: 25px;
`;

export const Search = styled.span`
  margin-left: 5px;
`;
