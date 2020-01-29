import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import samlogo from '../images/samlogo.svg'
import stars from  '../images/stars.png'


// import samlogo from '../images/samlogo.svg'

import { colors } from '../utils/theme'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.light};
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    display: none;
  }
`

const NavBar = () => {
  return (
    <>
    <Container>
      <div className="testContainer">
        <div className="imgDiv">      <img
        className="nav-link"
        height="200px"
        width="200px"
        src={samlogo}
      /></div>
        <div className="rightHalfDiv">
            <div className="topRightHalfDiv">
              <div className="reviewTopHalfDiv">
                <p>Beverly Hills Auto Repair</p>
                <div className="navReviewFlex"><img className="navStars" height="18px" width="100px" src={stars}/><a className="underlineText" href="/ReviewsPage">5 Star Rating Based On 123 Reviews</a></div>
              </div>
              <div className="addressTopHalfDiv"></div>
            </div>
            <div className="bottomRightHalfDiv"><NavLink
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
          <a href="/ServicesPages/ACPage">Ac System</a>
          <a href="/ServicesPages/AlignmentPage">Alignment</a>
          <a href="/ServicesPages/BrakesPage">Brakes</a>
          <a href="/ServicesPages/HosesPage">Cooling</a>
          <a href="/ServicesPages/DiagnosticsPage">Diagnostics</a>
          <a href="/ServicesPages/InspectionsPage">Digital Inspections</a>
          <a href="/ServicesPages/AccessoriesPage">Lift Kits</a>
          <a href="/ServicesPages/OilChangePage">Oil Change</a>
          <a href="/ServicesPages/TuneUpPage">Prevention</a>
          <a href="/ServicesPages/SteeringPage">Steering</a>
          <a href="/ServicesPages/TiresPage">Tires</a>
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
      </NavLink></div>
        </div>
      </div>
      {/* <div>
        <p>5 star Reviews!</p>
        <p>5 star Reviews!</p>

      </div> */}
      {/* <img
        className="nav-link"
        height="200px"
        width="200px"
        src={samlogo}
      /> */}
  
      
    </Container>
    </>
  )
}

export default NavBar
