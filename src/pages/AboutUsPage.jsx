import React from 'react'

import Page from '../components/Page'
import aboutUs from '../images/aboutUs.png'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const AboutUsPage = () => {
  return (
    <Page withPadding={false}><div className="aboutUsContainer">
      {/* <div className="aboutUsTopPadding"> */}
      <BreadcrumbsComponent nextOne={'About Us'} nextOneUrl={'/AboutUsPage'} />
      <h1 className="servicesTitle">About Us</h1>
      {/* </div> */}
      <div className="servicesBodyContainer">
        <div className="servicesBodyBox">
          <p className="servicesBodyText">
            Welcome to Swanders Automotive, your car service in Beverly Hills,
            FL! Swander’s Automotive is a family owned, full-service auto repair
            facility that opened our doors in Beverly Hills, Florida in 1989.
            For over 30 years, we’ve been providing the communities of Beverly
            Hills, Citrus Springs, Pine Ridge, Black Diamond and Citrus Hills
            with dependable auto repair and maintenance services. Our
            technicians are ASE Certified, and use the latest diagnostic
            equipment when performing any repair on foreign or domestic
            vehicles. At Swander’s Automotive we do just about everything
            related to auto repair and maintenance. We offer an unprecedented 3-year parts and labor warranty.
            Since we employ some of the leading diagnostics technicians in Citrus county, we particularly
            excel in diagnostics. If you’re having to wait for your vehicle,
            feel free to wait comfortably in our clean and spacious waiting
            room, where you can enjoy our various amenities such as free Wi-Fi,
            coffee, hot chocolate, and bottled water.
          </p>
          <div className="aboutUsImgBox"></div>
          <img height="300px" width="450px" src={aboutUs} />
        </div>
      </div>

      <div className="buttonsContainer">
        <div className="buttonBox">
          <a
            className="aboutButtons"
            type="submit"
            value="Subscribe"
            href="/ContactUsPage"
          >
            Contact Us
          </a>
          <a
            className="aboutButtons"
            type="submit"
            value="Subscribe"
            href="/ResumePage"
          >
            Work With Us
          </a>
          <a
            className="aboutButtons"
            type="submit"
            value="Subscribe"
            href="/VeteransPage"
          >
            Veterans
          </a>
        </div>
      </div>
      </div>
    </Page>
  )
}

export default AboutUsPage
