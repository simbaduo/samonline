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
//TO DO - Check CSS on a big screen white bottom for carimage
//TO DO - bring in screen to make minor edits on large display?

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
//TO DO - Spit error message if not all fields are entered
//TO DO - send message thanking you for submission after hitting enter
//TO DO - Allow Enter for Submit

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
import AdviceServiceCouponComponent from '../components/AdviceServiceCouponComponent'
import HomeSchedulerComponent from '../components/HomeSchedulerComponent'

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
  //background-color: rgb(255, 255, 255);
  //min-height: 200px;
`

const VetContentContainer = styled(ContentContainer)`
  //background-color: red;
  background-image: url('./images/veteranbg.jpg');
  background-size: cover;
  text-align: left;
  border: solid purple 3px;
  width: 100%;
  display: flex;
  padding-top: 30px;
`
const VetContentText = styled(ContentContainer)`
  //background-color: red;
  // background-image: url('./images/veteranbg.jpg');
  background-size: cover;
  text-align: left;
  // border: solid gold 3px;
  width: 80%;
  display: flex;
  justify-content: left;
  background-color: transparent;
`

const VetContentSpacer = styled(ContentContainer)`
  //background-color: red;
  background-image: url('./images/veteranbg.jpg');
  background-size: cover;
  text-align: left;
  border: solid gold 3px;
  width: 20%;
  display: flex;
  justify-content: left;
`

const DiagonalColorContainer = styled(ContentContainer)`
  //background-color: rgb(255, 255, 255);
  background: linear-gradient(
    to right bottom,
    #c23225 50%,
    rgb(255, 255, 255) 50%
  );
  min-height: 200px;
`

const DiagonalImageContainer = styled(ContentContainer)`
  //background-color: white;
  //background: linear-gradient(to right bottom, white 50%, #c23225 50%);
  background-image: url('./images/newcarcollage.jpg');
  background-size: cover;
  height: 100%;
  width: 100%;
  min-height: 500px;
  width: 100%;
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
        <VetContentContainer>
          <VetContentText>
            <div className="oilChangeTextBox">
              <img
                className="squiggleImg"
                height="12px"
                width="60px"
                src="./images/squiggle.png"
              />
              <h1 className="redText freeText">FREE</h1>
              <p className="oilChangeText">OIL CHANGE TO A VETERAN</p>
              <p className="smallText">Every Month.</p>
              <p className="smallText">*Must Have Valid Proof.</p>
            </div>
            <ContentContainer>
              <div className="submitContainer">
                <div className="submitBox">
                  <input
                    type="text"
                    className="inputField"
                    placeholder="name"
                  />

                  <input
                    className="inputField"
                    type="text"
                    placeholder="e-mail"
                  ></input>

                  <input
                    className="subscribeButton"
                    type="submit"
                    value="SUBSCRIBE"
                  />

                  <ul className="VeteranSubscribeBox"></ul>
                </div>
                <a className="smallLink" href="https://www.ebay.com">
                  Click Here To Learn More
                </a>
              </div>
            </ContentContainer>
          </VetContentText>

          {/* <p className="locationText">Beverly Hills Auto Repair</p> */}
          {/* <a
            className="reviewBox"
            href="https://www.google.com/search?q=swanders+auto&oq=swanders+auto&aqs=chrome.0.0l5j69i60l3.2116j1j4&sourceid=chrome&ie=UTF-8#lrd=0x88e86e93df40cbf3:0x4a92447f07561798,1,,,"
          >
            <img height="18px" width="110px" src="./images/stars.png" />
          </a>
          <p className="reviewText">5 Star Rating Based On 124 Reviews</p> */}
        </VetContentContainer>

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

        <DiagonalImageContainer></DiagonalImageContainer>

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
          <div className="logoDisplay">
            <AdviceServiceCouponComponent />
          </div>
          <div className="affiliateLogos">
            <img height="100px" src="./images/amsoil.jpeg" />
            <img height="100px" src="./images/ASE.png" />
            <img height="100px" src="./images/ATI.jpg" />
            <img height="100px" src="./images/BG.png" />
            <img height="100px" src="./images/Geico.png" />
            <img height="100px" src="./images/Jasper.jpg" />
            <img height="100px" src="./images/napaautocarelogo.png" />
            <img height="100px" src="./images/RC.png" />
            <img height="100px" src="./images/worldpac.jpeg" />
          </div>
          <div className="homeScheduler">
            <HomeSchedulerComponent />
          </div>
        </ContentContainer>
        {/* <div className="nextBox"></div> */}
      </Page>
    </>
  )
}

export default HomePage
