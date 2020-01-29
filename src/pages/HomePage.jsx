//TO DO - ADA compliance
//TO DO - Put Images directory in correct location

//TO DO - Build out all landing pages
//TO DO - Deploy To Docker
//TO DO - Review Filter Page
//TO DO - Make Required Fields

//TO DO - why do i have to use height rem instead of height 100%

//TO DO - CSS Issues
//TO DO - fix nav bar top margin
//TO DO - put ongoing specials in triangle?
//TO DO - Check CSS on a big screen white bottom for carimage
//TO DO - bring in screen to make minor edits on large display?
//TO DO - Fix BreadCrumbs
//TO DO - Why cant i bold the titles??

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
//TO DO - Veteran Display Page

//TO DO - APPOINTMENTS
//TO DO - Specials Offers dropdown. Linked from SpecialsPage db?
//TO DO - Finish Input Field Layout. !!! CHECK SCREENSHOTS IN WIREFRAME FOLDER FOR STYLING !!!
//TO DO - Print Coupon link of selected special
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
//TO DO - Google API account is set up with key access to route to location. Low Priority

import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Page from '../components/Page'
import CarouselComponent from '../components/CarouselComponent'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import AdviceServiceCouponComponent from '../components/AdviceServiceCouponComponent'
import AffiliatesComponent from '../components/AffiliatesComponent'
import HomeSchedulerComponent from '../components/HomeSchedulerComponent'

// import { NavLink } from 'react-router-dom'

// Wrap this component around anything you want to disappear on mobile
const HideWhenMobile = styled.div`
  @media (max-width: 500px) {
    display: none;
  }
`

const HideWhenDesktop = styled.div`
  @media (min-width: 501px) {
    display: none;
    background-color: red;
  }
`

const CenterWhenMobile = styled.div`
  @media (max-width: 500px) {
    justify-content: center;
    align-items: center;
  }
`

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

const ContentContainer = styled(FlexColumn)``

const VetContentContainer = styled(ContentContainer)`
  background-image: url('./images/veteranbg.jpg');
  background-size: cover;
  text-align: left;
  padding-top: 30px;

  @media (max-width: 500px) {
    background-image: none;
  }
`

const VetContentText = styled(ContentContainer)`
  background-size: cover;
  text-align: left;
  width: 80%;
  display: flex;
  justify-content: left;
  background-color: transparent;
`

const VetContentSpacer = styled(ContentContainer)`
  background-image: url('./images/veteranbg.jpg');
  background-size: cover;
  text-align: left;
  border: solid gold 3px;
  width: 20%;
  display: flex;
  justify-content: left;
`

const DiagonalColorContainer = styled(ContentContainer)`
  background: linear-gradient(
    to right bottom,
    #bb3729 50%,
    rgb(255, 255, 255) 50%
  );
  min-height: 200px;
`

const DiagonalImageContainer = styled(ContentContainer)`
  background-image: url('./images/dualcartest.jpg');
  background-size: contain;
  background-position: bottom center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  min-height: 500px;
  width: 100%;
`

const Form = styled.form``

const HomePage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async event => {
    // prevents the page from refreshing
    event.preventDefault()

    const response = await axios.post(
      'https://samonlineback.herokuapp.com/api/veteran',
      {
        name: name,
        email: email,
      }
    )

    console.log(response.data)
  }

  return (
    <>
      <Page withPadding={false}>
        <div className="topHeader">
          {/* <a className="topLogo" href="/">
            <img height="200rem" width="200rem" src="./images/samlogo.svg" />
          </a> */}
        </div>

        <HideWhenMobile>
          <div className="carouselBox">
            <CarouselComponent />
          </div>
        </HideWhenMobile>

        <VetContentContainer>
          <VetContentText>
            <div className="oilChangeTextBox">
              <img
                alt="Squiggle"
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
              <Form onSubmit={onSubmit}>
                {' '}
                <div className="submitContainer">
                  <div className="submitBox">
                    <input
                      type="text"
                      className="inputField"
                      placeholder="name"
                      onChange={e => setName(e.target.value)}
                      value={name}
                    />

                    <input
                      className="inputField"
                      type="text"
                      placeholder="e-mail"
                      onChange={e => setEmail(e.target.value)}
                      value={email}
                    ></input>

                    <input
                      className="subscribeButton"
                      type="submit"
                      value="Subscribe"
                    />

                    <ul className="VeteranSubscribeBox"></ul>
                  </div>
                  <a className="smallLink" href="https://www.ebay.com">
                    Click Here To Learn More
                  </a>
                </div>
              </Form>
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

        <DiagonalColorContainer />

        <HideWhenMobile>
          <ContentContainer>
            <FlexRow>
              <ContentContainer>
                <div className="homepageSpecialsContainer">
                  <div className="homepageSpecialsBox">
                    <img
                      alt="Squiggle"
                      height="12px"
                      width="60px"
                      src="./images/squiggle.png"
                    />
                    <h1 className="homepageSpecialsTitle">
                      <span className="redText">SYNTHETIC OIL CHANGE</span>
                    </h1>
                    <h3>$49.99</h3>

                    <p className="homepageSpecialsText">
                      Swander's Auto uses full synthetic NAPA-Grade oil which
                      extends oil change interval to twice as long. Stop in
                      today for a free inspection and full synthetic oil change.
                    </p>
                    <div className="redeemContainer">
                      <div className="redeemBox">
                        <input
                          className="redeemButton"
                          type="submit"
                          value="Redeem Offer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </ContentContainer>
              <ContentContainer />
            </FlexRow>
          </ContentContainer>
        </HideWhenMobile>

        <HideWhenDesktop>
          {/* <ContentContainer> */}
          <div className="homepageSpecialsContainer">
            <div className="homepageSpecialsBox">
              <img
                alt="Squiggle"
                height="12px"
                width="60px"
                src="./images/squiggle.png"
              />
              <h1 className="homepageSpecialsTitle">
                <span className="redText">SYNTHETIC OIL CHANGE</span>
              </h1>
              <h3>$49.99</h3>

              <p className="homepageSpecialsText">
                Swander's Auto uses full synthetic NAPA-Grade oil which extends
                oil change interval to twice as long. Stop in today for a free
                inspection and full synthetic oil change.
              </p>
              <div className="redeemBox">
                <input
                  className="redeemButton"
                  type="submit"
                  value="Redeem Offer"
                />
              </div>
            </div>
          </div>
          {/* </ContentContainer> */}
        </HideWhenDesktop>

        {/* TODO: figure out conflicts between flex: 1 and background-size: cover...
          background image height growing not causing flex container to expand vertically...
         */}
        <DiagonalImageContainer>
          <div className="welcomeText">
            <img
              alt="Squiggle"
              className="squiggleImg"
              height="16px"
              width="60px"
              src="./images/squiggle.png"
            />
            <h1>Welcome to</h1>
            <h1 className="glowTitle">Swander's Automotive</h1>
            <h3>
              Provides quality car care in Beverly Hills, Florida since 1989
            </h3>
          </div>
        </DiagonalImageContainer>

        {/* <div className="specialAd">
          <img src="./images/triangle.jpg" />
        </div> */}
        <ContentContainer>
          <AdviceServiceCouponComponent />
          <AffiliatesComponent />
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
