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
`;

/**
 * <div className="topHeader">
        <img height="100px" width="100px" src="./images/samlogowhite.jpg" />
      </div>
 */

const NavBar = () => {
  return (
    <Container>
      <NavLink to='/' exact={true}>Home</NavLink>
      <NavLink to='/1'>Page 1</NavLink>
      <NavLink to='/2'>Page 2</NavLink>
    </Container>
  );
};

export default NavBar;
