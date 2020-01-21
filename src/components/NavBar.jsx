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
      {/* <NavLink
        to="/ServicesPage"
        className="nav-link"
        activeStyle={{ color: '#F0324D' }}
      > */}
      <div className="dropdownNav">
        <a className="dropdownServicesButton" href="/ServicesPage">
          SERVICES
        </a>
        <div className="dropdownNavContent">
          <a href="/">HOME</a>
          <a href="/ServicesPages/OilChangePage">OIL CHANGE</a>
          <a href="/ServicesPages/ACPage">A/C SYSTEM</a>
          <a href="/ServicesPages/AlignmentPage">ALIGNMENT</a>
          <a href="/ServicesPages/BeltsHosesPage">BELTS / HOSES</a>
          <a href="/ServicesPages/BrakesPage">BRAKES</a>
          <a href="/ServicesPages/DiagnosticsPage">DIAGNOSTICS</a>
          <a href="/ServicesPages/SteeringPage">STEERING</a>
          <a href="/ServicesPages/TiresPage">TIRES</a>
          <a href="/ServicesPages/AccessoriesPage">LIFT KITS / ACCESSORIES</a>
        </div>
      </div>
      {/* </NavLink> */}
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
      <div className="dropdownNav">
        <a className="dropdownServicesButton" href="/AboutUsPage">
          ABOUT US
        </a>
        <div className="dropdownNavContent">
          <a href="/ResumePage">CAREERS</a>
          <a href="/ContactUsPage">CONTACT US</a>
          <a href="/#DWHYDOESTHISWORK">GOOGLE +</a>
        </div>
      </div>
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
