//TO DO - make squiggle its own component
//TO DO - make certain text areas bold with google fonts
//TO DO - the A's look weird
//TO DO - why cant i bolden certain things?
//TO DO - why do i have to add font family to all CSS
//TO DO - make more components
//TO DO - fix nav bar top margin
//TO DO - put ongoing specials in triangle?
//TO DO - triangle position absolute?
//TO DO - fix image location

import React from 'react'

import Page from '../components/Page'
// import Carousel from '../components/Carousel'

const HomePage = () => {
  return (
    <>
      <Page>
        <div className="topHeader">
          {/* <a className="topLogo" href="/">
            <img height="200rem" width="200rem" src="./images/samlogo.svg" />
          </a> */}
          {/* <Carousel /> */}
        </div>

        <div className="reviewBox">
          <p className="locationText">Beverly Hills Auto Repair</p>
          <a
            className="reviewBox"
            href="https://www.google.com/search?q=swanders+auto&oq=swanders+auto&aqs=chrome.0.0l5j69i60l3.2116j1j4&sourceid=chrome&ie=UTF-8#lrd=0x88e86e93df40cbf3:0x4a92447f07561798,1,,,"
          >
            <img height="18px" width="110px" src="./images/stars.png" />
          </a>
          <p className="reviewText">5 Star Rating Based On 124 Reviews</p>
        </div>

        <p className="callUsText">
          Call Us: <span className="redNumText"> (352) 527-0440</span>
        </p>
        <p className="addressText">
          5546 N. Lecanto Hwy. Beverly Hills, FL 34465
        </p>
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
        {/* <div className="specialAd">
          <img src="./images/triangle.jpg" />
        </div> */}
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
        {/* <div className="nextBox"></div> */}
      </Page>
    </>
  )
}

export default HomePage
