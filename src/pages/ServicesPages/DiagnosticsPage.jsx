import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const DiagnosticsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Diagnostics'}
        secondOneUrl={'/ServicesPages/DiagnosticsPage'}
      />
      <h1 className="servicesTitle">Diagnostics / Check Engine Light</h1>
      <p className="servicesBodyText">
        Check engine lights will probably be the first indication that your
        vehicle has detected a problem within one of monitored systems. This
        light may or may not go along with a problem that you notice while
        driving. Check engine lights can be set with problems in a vehicle’s
        fuel system, vacuum system, cooling system, ignition system, or one of
        many others. When vehicles had fewer onboard computers and
        interconnected systems, a quick visual inspection could usually reveal a
        broken or worn part that needed replacement. Modern vehicles leverage
        the latest technology to manage everything from emissions to sound
        systems. Our diagnostic equipment communicates with computers on your
        vehicle to obtain valuable data on what's gone wrong. Differing by
        years, makes, and models, today’s vehicles have on-board computers that
        can provide significant amounts of data but often without definitive
        answers. Most data is vague or generic at best. The data will usually
        point a technician in a particular direction to begin diagnostics.
        Sometimes you will experience an obvious problem with the performance of
        your vehicle but no check engine or warning lights will illuminate. This
        is where our years of experience, information systems, specialized
        equipment, and proper training will ensure that you can be confident
        that Swander’s Automotive is the right place to solve your problem. You
        can feel confident knowing that our ASE certified technicians at
        Swander’s Automotive are experienced and continually training to keep up
        with the complex technologies of your vehicle.
      </p>{' '}
    </Page>
  )
}

export default DiagnosticsPage
