import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const SteeringPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Steering'}
        secondOneUrl={'/ServicesPages/SteeringPage'}
      />
      <h1 className="servicesTitle">Suspension</h1>
      <p className="servicesBodyText">
        Properly aligned steering and suspension can help deliver a smooth and
        controlled ride. The steering system and suspension systems bear the
        weight of your vehicle, maintain a smooth safe ride, and keep your tires
        from wearing out prematurely or unsafely. At Swander’s Automotive we
        recommend that your vehicle should be checked at least once a year to
        prevent significant repairs. Anytime you feel symptoms of steering or
        suspension trouble, have us check your vehicle to prevent additional and
        sometimes costly repairs. Neglected issues could result in very
        dangerous driving conditions. At Swander’s Automotive you can have peace
        of mind knowing that we have the expertise to properly diagnose and
        repair any issues that you may have. If you suspect a problem or if it’s
        been a while since your vehicle has been inspected, give us a call and
        schedule your appointment today.
      </p>{' '}
    </Page>
  )
}

export default SteeringPage
