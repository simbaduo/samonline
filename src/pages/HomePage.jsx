//TO DO - make more components
//TO DO - ADA compliance
//TO DO - review how I got here
//TO DO - Put Images directory in correct location

//TO DO - CSS Issues
//TO DO - fix nav bar top margin
//TO DO - why do i have to add font family to all CSS
//TO DO - put ongoing specials in triangle?
//TO DO - why cant i bolden certain things?
//TO DO - the A's look weird
//TO DO - make squiggle its own component
//TO DO - triangle position absolute?

//TO DO - NAV
//TO DO - Finish Hamburger Menu Submenu items and CSS

//TO DO - SERVICES
//TO DO - If you click services instead of submenu item, you land on services page with a list of links to all submenu items
//TO DO - Create admin page and access to enter new vehicle data

//TO DO - CAR SALES
//TO DO - Add 3 vehicles to a list and display
//TO DO - Create admin page and access to enter new vehicle data

//TO DO - SPECIALS
//TO DO - Add Current Specials Table. !!! CHECK SCREENSHOTS IN WIREFRAME FOLDER FOR STYLING !!!
//TO DO - Click Redeem Now. Links you to Appointments page with Special Offers filled out with selected special offer
//TO DO - Print Coupon link of selected special

//TO DO - APPOINTMENTS
//TO DO - Specials Offers dropdown. Linked from SpecialsPage db?
//TO DO - Calendar dropdown for First and Second Choice of appointment
//TO DO - Finish Input Field Layout. !!! CHECK SCREENSHOTS IN WIREFRAME FOLDER FOR STYLING !!!
//TO DO - Print Coupon link of selected special
// * TO DO - Store Appointment Input data into db to be accessed by admin

//TO DO - ABOUT US
//TO DO - About Us > Careers. store resumes into db for admin to view
//TO DO - About Us > Contact Us Build out Contact Us form
//TO DO - About us > Google+ link to new page

//TO DO - REVIEWS
//TO DO - google reviews? can i pull reviews from google API and store them into my own filtered db?

//TO DO - DIRECTIONS
//TO DO - Static Image of Map for now.
//TO DO - Google API account is set up with key access to route to location. Low Priority

import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import CarouselComponent from '../components/CarouselComponent'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
// import { NavLink } from 'react-router-dom'

/** re-usable flex containers (TODO: move to separate folder) */
const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const FlexRow = styled(FlexColumn)`
  flex-direction: row;
`

const TextPadding = styled.div`
  padding: 20px;
`

/** layout-specific containers */
const ContentContainer = styled(FlexColumn)`
  background-color: white;
  min-height: 200px;
`

const RedContentContainer = styled(ContentContainer)`
  background-color: red;
`

const DiagonalColorContainer = styled(ContentContainer)`
  background-color: white;
  background: linear-gradient(to right bottom, red 50%, white 50%);
  min-height: 200px;
`

const DiagonalColorContainerInverted = styled(ContentContainer)`
  background-color: white;
  background: linear-gradient(to right bottom, white 50%, red 50%);
  min-height: 200px;
`

const HomePage = () => {
  return (
    <>
      <Page>
        <div className="topHeader">
          {/* <a className="topLogo" href="/">
            <img height="200rem" width="200rem" src="./images/samlogo.svg" />
          </a> */}
        </div>
        <div className="carouselBox">
          <CarouselComponent />
        </div>
        <RedContentContainer>
          <p className="locationText">Beverly Hills Auto Repair</p>
          <a
            className="reviewBox"
            href="https://www.google.com/search?q=swanders+auto&oq=swanders+auto&aqs=chrome.0.0l5j69i60l3.2116j1j4&sourceid=chrome&ie=UTF-8#lrd=0x88e86e93df40cbf3:0x4a92447f07561798,1,,,"
          >
            <img height="18px" width="110px" src="./images/stars.png" />
          </a>
          <p className="reviewText">5 Star Rating Based On 124 Reviews</p>
        </RedContentContainer>

        <DiagonalColorContainer>
          <p className="callUsText">
            Call Us: <span className="redNumText"> (352) 527-0440</span>
          </p>
        </DiagonalColorContainer>

        <ContentContainer>
          <TextPadding>
            <p className="addressText">
              5546 N. Lecanto Hwy. Beverly Hills, FL 34465
            </p>
          </TextPadding>
        </ContentContainer>

        <DiagonalColorContainerInverted>
          <img
            className="squiggleImg"
            height="12px"
            width="60px"
            src="./images/squiggle.png"
          />
          <h1 className="redText freeText">FREE</h1>
          <div className="oilChangeTextBox">
            <p className="oilChangeText">OIL CHANGE TO A</p>
            <p className="oilChangeText">VETERAN</p>
            <p className="smallText">Every Month.</p>
            <p className="smallText">*Must Have Valid Proof.</p>
          </div>
        </DiagonalColorContainerInverted>

        <ContentContainer>
          <ul className="veteranInputBox">
            <li>
              <input type="text" className="inputField" placeholder="name" />
            </li>
            <li>
              <input
                className="inputField"
                type="text"
                placeholder="e-mail"
              ></input>
            </li>
            <li>
              <input
                className="subscribeButton"
                type="submit"
                value="SUBSCRIBE"
              />
            </li>
            <li>
              <a className="smallLink" href="https://www.ebay.com">
                Click Here To Learn More
              </a>
            </li>
          </ul>
        </ContentContainer>

        {/* <div className="specialAd">
          <img src="./images/triangle.jpg" />
        </div> */}
        <ContentContainer>
          <div className="specialsContainer">
            <div className="specialsBox">
              <img height="12px" width="60px" src="./images/squiggle.png" />
              <h1 className="specialsTitle">
                <span className="redText">SYNTHETIC OIL CHANGE</span>
              </h1>
              <h3>$49.99</h3>

              <p className="specialsText">
                Swander's Auto uses full synthetic NAPA-Grade oil which extends
                oil change interval to twice as long. Stop in today for a free
                inspection and full synthetic oil change.
              </p>
              <div className="redeemBox">
                <input
                  className="redeemButton"
                  type="submit"
                  value="REDEEM OFFER"
                />
              </div>
            </div>
          </div>
        </ContentContainer>
        {/* <div className="nextBox"></div> */}
      </Page>
    </>
  )
}

export default HomePage
