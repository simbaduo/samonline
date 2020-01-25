import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const OilChangePage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Oil Change'}
        secondOneUrl={'/ServicesPages/OilChangePage'}
      />
      <h1 className="servicesTitle">Oil &amp; Filter Change</h1>
      <p className="servicesBodyText">
        For over 30 years, drivers in and around Beverly Hills have trusted the
        ASE Certified technicians at Swander’s Automotive for their regular
        vehicle maintenance. Oil changes are the most common reason you visit an
        automotive repair shop. At Swander’s Automotive we take this service
        very seriously. This is why every oil change comes with a complete and
        thorough vehicle inspection which you can view by text, email, or print
        form. You will find our oil change services, whether conventional
        (semi-synthetic) or full synthetic are priced better than most shops in
        our area. You can have peace of mind knowing that the ASE-Certified
        technicians at Swander’s Automotive will only use quality NAPA filters
        and lubricants that meet or exceed your manufacturers recommendations.
        Our certified team has decades of experience performing over 30,000 oil
        changes and we look forward to servicing your car too. Call or use our
        website to schedule your appointment today!
      </p>{' '}
    </Page>
  )
}

export default OilChangePage
