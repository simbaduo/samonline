import React, { useState, Component } from 'react'
import styled from 'styled-components'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CarouselItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CarouselContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const CarouselContentRowContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`

const CarouselContentRowLeftContainer = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  width: 47%;
`

const CarouselContentRowRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
`

const CarouselTextContainer = styled.div`
  padding-bottom: 80px;
`

const CarouselImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

const FullWidthContainer = styled.div`
  padding-top: 20px;
  width: 100%;
`

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        showStatus={false}
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        transitionTime={750}
        showThumbs={false}
      >
        <CarouselItemContainer>
          <CarouselContentContainer>
            <CarouselTextContainer>
              <FullWidthContainer>
                <h1 className="napaBackgroundTitle">
                  PROVIDING QUALITY CAR CARE
                </h1>
              </FullWidthContainer>

              <FullWidthContainer>
                <h2 className="redText napaBackgroundLocation">
                  BEVERLY HILLS, FLORIDA
                </h2>
              </FullWidthContainer>
            </CarouselTextContainer>
          </CarouselContentContainer>
          <CarouselImageContainer>
            <img
              alt="Swander's Car Logo"
              src="./images/carbackgroundnapa.jpg"
            />
          </CarouselImageContainer>
        </CarouselItemContainer>

        <CarouselItemContainer>
          <CarouselContentContainer>
            <CarouselContentRowContainer>
              <CarouselContentRowLeftContainer>
                <div className="napaSquiggleBox">
                  <img
                    className="squiggleImg"
                    height="12px"
                    width="60px"
                    alt="Squiggle"
                    src="./images/squigglewhite.png"
                  />
                </div>

                <p className="yellowText warrantyCarouselTitle">
                  The NAPA AutoCare Peace of Mind Warranty covers parts and
                  labor on qualifying repairs and services for 36 months/36,000
                  miles.
                </p>
                <p className="warrantyCarouselText">
                  There's no greater peace of mind than knowing you have one
                  less worry by having your vehicles services by professionals
                  at your local NAPA AutoCare Center. It's a written warranty
                  that is honored at more than 14,000 locations nationwide -
                  more than any other automotive repair brand.
                </p>
                <form action="https://www.napaautocare.com/warranty.aspx">
                  <button
                    className="carouselButton"
                    value="Go to NAPA Warranty Page"
                    type="submit"
                  >
                    LEARN MORE
                  </button>
                </form>
              </CarouselContentRowLeftContainer>
              <CarouselContentRowRightContainer />
            </CarouselContentRowContainer>
          </CarouselContentContainer>
          <CarouselImageContainer>
            <img
              className="warrantyImg"
              alt="Warranty Visual Display"
              src="./images/warrantypic.jpg"
            />
          </CarouselImageContainer>
        </CarouselItemContainer>

        <CarouselItemContainer>
          <CarouselContentContainer>
            <CarouselTextContainer>
              {/* <div className="vetContainer"> */}
              <FullWidthContainer>
                <h1 className="vetTopHeader">WE APPRECIATE</h1>
              </FullWidthContainer>

              <FullWidthContainer>
                <h1 className="vetNextHeader">OUR VETERANS</h1>
              </FullWidthContainer>
              {/* </div> */}

              <FullWidthContainer>
                <p className="vetText">
                  We offer a 10% discount to all Veterans with a valid ID.{' '}
                </p>
                <p className="vetSubText">
                  Excludes tires, batteries, and oil changes{' '}
                </p>
              </FullWidthContainer>
            </CarouselTextContainer>
          </CarouselContentContainer>
          <CarouselImageContainer>
            <img
              alt="American Flag / Veteran Benefits"
              src="./images/FinancingAd.png"
            />
          </CarouselImageContainer>
        </CarouselItemContainer>

        <CarouselItemContainer>
          <img
            alt="Rough Country Description"
            src="./images/roughcountry.jpg"
          />
          {/* <p className="legend">Legend 4</p> */}
          <CarouselContentContainer />

          {/* <CarouselItemContainer>
            <img src="./images/FinancingAd.png" />
          </CarouselItemContainer> */}
        </CarouselItemContainer>
      </Carousel>
    </>
  )
}

export default CarouselComponent
