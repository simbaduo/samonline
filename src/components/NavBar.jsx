import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../utils/theme';

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.dark};

  @media (max-width: 500px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <Container>
      <NavLink to='/' className="nav-link" activeStyle={{ color: '#fff' }} exact={true}>Home</NavLink>
      <NavLink to='/1' className="nav-link" activeStyle={{ color: '#fff' }}>Page 1</NavLink>
      <NavLink to='/2' className="nav-link" activeStyle={{ color: '#fff' }}>Page 2</NavLink>
    </Container>
  );
};

export default NavBar;
