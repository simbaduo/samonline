import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from '../utils/theme'

const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.light};

  @media (max-width: 500px) {
    display: none;
  }
`

const NavBar = () => {
  return (
    <Container>
      {/* <img
        className="navLogo"
        height="150px"
        width="150px"
        src="./images/samlogo.svg"
      /> */}
      <NavLink
        to="/"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
        exact={true}
      ></NavLink>
      <NavLink
        to="/"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
        exact={true}
      >
        HOME
      </NavLink>
      <NavLink
        to="/ServicesPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        SERVICES
      </NavLink>
      <NavLink
        to="/CarSalesPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
        // hoverStyle={{ color: '#F0324D' }}
      >
        CAR SALES
      </NavLink>
      <NavLink
        to="/SpecialsPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        SPECIALS
      </NavLink>
      <NavLink
        to="/AppointmentPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        APPOINTMENTS
      </NavLink>
      <NavLink
        to="/AboutUsPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        ABOUT US
      </NavLink>
      <NavLink
        to="/ReviewsPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        REVIEWS
      </NavLink>
      <NavLink
        to="/DirectionsPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      >
        DIRECTIONS
      </NavLink>
    </Container>
  )
}

export default NavBar
