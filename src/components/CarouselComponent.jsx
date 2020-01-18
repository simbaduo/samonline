import React, { useState, Component } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const CarouselComponent = () => {
  return (
    <>
      <Carousel
        showStatus={false}
        // autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        transitionTime={750}
        showThumbs={false}
      >
        <div className="napaDiv">
          <img src="./images/carbackgroundnapa.jpg" />
          <h1 className="napaBackgroundTitle">PROVIDING QUALITY CAR care</h1>
          <h2 className="redText napaBackgroundLocation">
            BEVERLY HILLS, FLORIDA
          </h2>
        </div>
        <div className="testDiv">
          <img className="warrantyImg" src="./images/warrantypic.jpg" />

          <p className="yellowText warrantyCarouselTitle">
            The NAPA AutoCare Peace of Mind Warranty covers parts and labor on
            qualifying repairs and services for 36 months/36,000 miles.
          </p>
          <p className="warrantyCarouselText">
            There's no greater peace of mind than knowing you have one less
            worry by having your vehicles services by professionals at your
            local NAPA AutoCare Center. It's a written warranty that is honored
            at more than 14,000 locations nationwide - more than any other
            automotive repair brand.
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
        </div>
        <div>
          <img src="./images/americanflag.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </div>
        <div>
          <img src="./images/roughcountry.jpg" />
          {/* <p className="legend">Legend 4</p> */}
        </div>
      </Carousel>
    </>
  )
}

export default CarouselComponent
