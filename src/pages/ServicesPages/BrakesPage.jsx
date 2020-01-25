import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const BrakesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Brakes'}
        secondOneUrl={'/ServicesPages/BrakesPage'}
      />
      <h1 className="servicesTitle">Brakes &amp; Rotors</h1>
      <p className="servicesBodyText">
        Properly working brakes are probably the number one concern for the
        safety of yourself, your passengers, and other vehicles on the road.
        Proper care and maintenance is required for your brakes to perform as
        needed when demanded upon. Our ASE certified technicians at Swander’s
        Automotive are properly trained and qualified to diagnose and repair
        today’s complex braking systems. As a general rule, brake pads should be
        replaced about every 50,000 miles. Driving in stop and go traffic may
        cause your brakes to wear out sooner than usual. Driving heavy trucks,
        SUVs, or pulling trailers can also cause brakes to wear quicker than
        usual. Inferior brake parts or improperly installed parts may also be
        reasons for premature wear. Some indicators of brake problems or failure
        are: A soft or fading brake pedal. A pulsation in the pedal when brakes
        are applied. Squealing, grinding, or screaching when stopping. If you
        are experiencing any of the previous symptoms please call or schedule an
        appointment as soon as possible. You will have peace of mind knowing
        that you and your family will be safe by trusting our experienced ASE
        certified technicians with your brake service. When it comes to your
        brakes and your safety, we at Swander’s Automotive refuse to take short
        cuts. We will only use premium quality parts that we will stand behind
        with our Peace of Mind Warranty.
      </p>{' '}
    </Page>
  )
}

export default BrakesPage
