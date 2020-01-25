import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const AboutUsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'About Us'} nextOneUrl={'/AboutUsPage'} />
      <h1 className="servicesTitle">About Us</h1>
      <p className="servicesBodyText">
        Welcome to Swanders Automotive, your car service in Beverly Hills, FL!
        Swander’s Automotive is a family owned, full-service auto repair
        facility that opened our doors in Beverly Hills, Florida in 1989. For
        over 30 years, we’ve been providing the communities of Beverly Hills,
        Citrus Springs, Pine Ridge, Black Diamond and Citrus Hills with
        dependable auto repair and maintenance services. Our technicians are ASE
        Certified, and use the latest diagnostic equipment when performing any
        repair on foreign or domestic vehicles. At Swander’s Automotive we do
        just about everything related to auto repair and maintenance. Since we
        employ some of the leading diagnostics technicians in Citrus county, we
        particularly excel in diagnostics. If you’re having to wait for your
        vehicle, feel free to wait comfortably in our clean and spacious waiting
        room, where you can enjoy our various amenities, such as free Wi-Fi,
        coffee, hot chocolate, and bottled water. Swanders Automotive is a
        certified NAPA AutoCare Center, offering an unprecedented 3-year parts
        and lab
      </p>{' '}
    </Page>
  )
}

export default AboutUsPage
