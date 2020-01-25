import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const ACPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'A/C Repair'}
        secondOneUrl={'/ServicesPages/ACPage'}
      />
      <h1 className="servicesTitle">Air Conditioning</h1>
      <p className="servicesBodyText">
        Air Conditioning isn’t a luxury for drivers in Beverly Hills, it’s a
        necessity. It is possible plex systems controlled by various computers,
        valves, actuators, and vehicle specific fluids. Without the proper
        equipment, training, or information it is almost impossible to make a
        proper diagnosis or repair. This is why you can feel completely
        confident knowing that decades of experience and state of the art
        equipment will allow the ASE certified technicians at Swander’s
        Automotive to properly diagnosethe interior temperature of your car to
        well over 100 degrees in the summer which is not only uncomfortable,
        it’s dangerous. To ensure a safe and comfortable driving experience in
        our Florida heat, it is essential that your A/C system is working
        properly and efficiently. Today’s newer vehicles havefor com, repair,
        and service your air conditioning system. You will also have our Peace
        of Mind Warranty assuring you that our repairs are guaranteed. If you
        feel that your air conditioning is not quite as cold as it used to be,
        or if it doesn’t work at all, give us a call and schedule an appointment
        today.
      </p>
    </Page>
  )
}

export default ACPage
