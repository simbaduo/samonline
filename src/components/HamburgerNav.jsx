import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { NavLink } from 'react-router-dom'
import styled, { withTheme } from 'styled-components'

import { colors } from '../utils/theme'

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '36px',
  },
  bmBurgerBars: {
    background: colors.dark,
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: colors.dark,
    // padding: '2.5em 1.5em 0',
    fontSize: '1em',
  },
  bmMorphShape: {
    fill: colors.dark,
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
}

const Container = styled.div`
  @media (min-width: 501px) {
    display: none;
  }
`

const LinksContainer = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: left;
  padding-top: 30px;
  padding-left: 0;
  margin-left: 0;
  color: white;
`

const HamburgerNav = () => {
  const [dropDown, setDropDown] = useState(false)

  const dropDownFunc = () => {
    if (!dropDown) {
      setDropDown(true)
    } else {
      setDropDown(false)
    }
  }

  return (
    <Container>
      <Menu width="65%" noOverlay styles={styles} right>
        <LinksContainer>
          <NavLink
            to="/"
            className="nav-link"
            activeStyle={{ color: '#f0324d' }}
            exact={true}
          >
            HOME
          </NavLink>

          <div onClick={dropDownFunc}>
            <span class="far fa-star"></span>
            <p className="servicesHamburgerDropdown">
              &nbsp;&nbsp;&nbsp;&nbsp;SERVICES
            </p>
          </div>
          {dropDown && (
            <div className="dropDown">
              <a href="/ServicesPages/OilChangePage">Oil Change</a>
              <a href="/ServicesPages/BrakesPage">Brakes</a>
            </div>
          )}
          <NavLink
            to="/CarSalesPage"
            className="nav-link"
            activeStyle={{ color: '#f0324d' }}
          >
            CAR SALES
          </NavLink>
          <NavLink
            to="/SpecialsPage"
            className="nav-link"
            activeStyle={{ color: '#fff' }}
          >
            SPECIALS
          </NavLink>
          <NavLink
            to="/AppointmentPage"
            className="nav-link"
            activeStyle={{ color: '#fff' }}
          >
            APPOINTMENTS
          </NavLink>
          <div onClick={dropDownFunc}>
            <span class="far fa-star"></span>
            <p className="iconTextHamburger">ABOUT US</p>
          </div>
          {dropDown && (
            <div className="dropDown">
              <a href="/ResumePage">CAREERS</a>
              <a href="/AboutUsPage">CONTACT US</a>
              <a href="https://www.google.com">GOOGLE +</a>
            </div>
          )}
          <NavLink
            to="/ReviewsPage"
            className="nav-link"
            activeStyle={{ color: '#fff' }}
          >
            REVIEWS
          </NavLink>
          <NavLink
            to="/DirectionsPage"
            className="nav-link"
            activeStyle={{ color: '#fff' }}
          >
            DIRECTIONS
          </NavLink>
        </LinksContainer>
      </Menu>
    </Container>
  )
}

export default HamburgerNav
