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

const FooterNav = () => {
  return (
    <Container>
      <footer className="bottomFooter">
        <div className="footerLogo">
          <img
            alt="Swander's Tiny Logo"
            height="150px"
            width="150px"
            src="./images/samfooterlogo.svg"
          />
        </div>
        <div className="footerNav">
          <h6 className="whiteTitle">Useful Links</h6>
          <ul className="bottomNavList">
            {/* <li className="whiteTitle">Useful Links</li> */}
            <li>
              <a className="footerLinks" href="../">
                Home
              </a>
            </li>{' '}
            <li className="footerListItem">
              <a className="footerLinks" href="../ReviewsPage">
                Reviews
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../ServicesPage">
                Services
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../DirectionsPage">
                Directions
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../SpecialsPage">
                Specials
              </a>
            </li>{' '}
            <li className="footerListItem">
              <a className="footerLinks" href="../CarSalesPage">
                Vehicles
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../AppointmentPage">
                Appointments
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../ContactUsPage">
                Contact Us
              </a>
            </li>
            <li className="footerListItem">
              <a className="footerLinks" href="../AboutUsPage">
                About Us
              </a>
            </li>
          </ul>
        </div>
        <div className="contactFooter">
          <ul className="footerList">
            <li className="whiteTitle">Contact Us</li>
            <li>
              <span className="whiteBold">Working Hours: </span> Mon - Fri: 8:00
              AM - 5:00 PM
            </li>
            <li>
              <span className="whiteBold">Our Address: </span> 5546 N. Lecanto
              Hwy. Beverly Hills, FL 34465
            </li>
            <li>
              <span className="whiteBold">Phone Number: </span> (352) 527 - 0440
            </li>
          </ul>
        </div>
        <div className="socialMediaFooter">
          <h2>Social Media</h2>
          <a
            target="_blank"
            href="https://www.facebook.com/swandersautomotive/"
          >
            <img
              sry="Facebook Icon"
              height="30px"
              width="30px"
              src="./images/facebook-icon.png"
            />
          </a>
          <a target="_blank" href="https://www.google.com">
            <img
              src="Google+ Icon"
              height="30px"
              width="30px"
              src="./images/googleplusicon.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.yelp.com/biz/swanders-auto-beverly-hills-2"
          >
            <img
              alt="Yelp Logo Icon"
              height="30px"
              width="30px"
              src="./images/yelpicon.png"
            />
          </a>{' '}
          <div className="creditsFooter">
            <h2>5546 N. Lecanto Hwy. Beverly Hills, FL 34465 (352) 527-0440</h2>
          </div>
        </div>
      </footer>
    </Container>
  )
}

export default FooterNav
