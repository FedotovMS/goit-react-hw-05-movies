import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;

export const StyledHeader = styled.header`
  display: flex;
  gap: 30px;
  padding: 30px;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(180, 182, 222, 1);
  -moz-box-shadow: 0px 10px 5px 0px rgba(180, 182, 222, 1);
  box-shadow: 0px 10px 5px 0px rgba(180, 182, 222, 1);
  list-style: none;
  font-weight: 600;
  margin-bottom: 50px;
`;
