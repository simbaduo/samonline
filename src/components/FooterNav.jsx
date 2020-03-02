import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import samfooterlogo from '../images/samfooterlogo.svg'
import facebookicon from '../images/facebook-icon.png'
import yelpicon from '../images/yelpicon.png'
import googleicon from '../images/googleplusicon.png'
import adaicon from '../images/handicap.png'

import { colors } from '../utils/theme'

const Container = styled.div`
  // padding-top: 20px;
  // padding-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${colors.light};
  
`

const FooterNav = () => {
  return (
    <>
      <Container>
        <footer className="bottomFooter">
          <div className="footerLogo">
            <a href="/"><img
              className="mediaImg"
              alt="Swander's Tiny Logo"
              height="125px"
              width="175px"
              src={samfooterlogo}
            /></a>
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
                <a className="footerLinks" href="../reviews">
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
              <li className="footerListItem">
                <a
                  className="footerLinks"
                  target="_blank"
                  href="https://www.swandersadmin.com"
                >
                  Admin
                </a>
              </li>
            </ul>
          </div>
          <div className="contactFooter">
            <h6 className="whiteTitle">Contact Us</h6>
            <ul className="footerList">
              <li>
                <span className="whiteBold">Working Hours: </span> Mon - Fri:
                8:00 AM - 5:00 PM
              </li>
              <li>
                <span className="whiteBold">Our Address: </span> 5546 N. Lecanto
                Hwy. Beverly Hills, FL 34465
              </li>
              <li>
                <span className="whiteBold">Phone Number: </span>{' '}
                <a href="tel:352-527-0440"><span className="redText phoneNumber">(352) 527 - 0440</span></a>
              </li>
            </ul>
          </div>
          <div className="socialMediaFooter">
            <h2 className="whiteTitle">Social Media</h2>
            <div className="socialLogoIcons">
              <a
                target="_blank"
                href="https://www.facebook.com/swandersautomotive/"
              >
                <img
                  sry="Facebook Icon"
                  height="35px"
                  width="35px"
                  src={facebookicon}
                />
              </a>
              <a
                target="_blank"
                href="https://www.google.com/search?ei=bhsyXru7MOGkggekx6r4Cg&q=Swander%27s+Auto&oq=Swander%27s+Auto&gs_l=psy-ab.3..0i22i10i30l2.4282.4282..4449...0.0..0.124.323.1j2......0....1..gws-wiz.5JVmtRo0oDo&ved=0ahUKEwi7qt2YgarnAhVhkuAKHaSjCq8Q4dUDCAs&uact=5"
              >
                <img
                  src="Google+ Icon"
                  height="35px"
                  width="35px"
                  src={googleicon}
                />
              </a>
              <a
                target="_blank"
                href="https://www.yelp.com/biz/swanders-auto-beverly-hills-2"
              >
                <img
                  alt="Yelp Logo Icon"
                  height="35px"
                  width="35px"
                  src={yelpicon}
                />
              </a>{' '}
            </div>
            <div className="creditsFooter"></div>
          </div>
        </footer>
      </Container>
      <img
        className="ada-icon"
        src={adaicon}
        alt="If You Are Using A Screen Reader And Are Having Problems Using This Website, please call Swander's Automotive (352) 527-0440 For Assistance."
        title="If You Are Using A Screen Reader And Are Having Problems Using This Website, please call Swander's Automotive (352) 527-0440 For Assistance."
        width="25"
      ></img>
    </>
  )
}

export default FooterNav
