import React from 'react'
import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const BatteryPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Batteries / Alternators / Starters'}
        secondOneUrl={'/ServicesPages/BatteryPage'}
      />
      <h1 className="servicesTitle">Batteries &amp; Starters</h1>
      <p className="servicesBodyText">
        Your battery, starter, and alternator are all components that are vital
        for you to depend on your vehicle everyday. These are all needed to
        ensure you can jump in and start your vehicle without a thought. They
        are also necessary to keep your vehicle’s features working properly and
        keep you from stalling while travelling down the road. Batteries,
        starters, and alternators all work together and somewhat depend on each
        other for each component to work properly. Sometimes its difficult to
        determine where the actual problem is and it may require specialized
        equipment or training. When it comes to batteries, prevention is better
        than waiting until it fails and leaves your stranded. We at Swander’s
        Automotive have the proper equipment and expertise to diagnose and make
        the proper repairs that your vehicle may need. Give us a call today so
        you can have peace of mind knowing that you can depend on your vehicle
        every time you turn your key (or press the button).
      </p>{' '}
    </Page>
  )
}

export default BatteryPage
