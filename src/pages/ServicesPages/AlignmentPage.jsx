import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const AlignmentPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Alignment'}
        secondOneUrl={'/ServicesPages/AlignmentPage'}
      />
      <h1 className="servicesTitle">Alignments</h1>
      <p className="servicesBodyText">
        A wheel alignment is a service that most vehicles will eventually need.
        Many drivers won’t notice an alignment problem until the misalignment
        has compromised their vehicle. This typically causes tires to wear
        improperly and sooner than normal. A vehicle that slightly drifts to the
        right or left is one of the most common signs that an alignment is
        needed. There are also suspension and steering components which can wear
        out or break and cause a vehicle to be out of alignment. Some of these
        issues can become quite dangerous. At Swander’s Automotive our team of
        ASE Certified technicians use state-of-the-art alignment equipment to
        keep your vehicle driving straight. If you notice that your car is
        pulling to either side or if you notice that your tires are wearing
        unevenly (wearing out on the edges) give us a call here at Swander’s
        Automotive to schedule your alignment today. You can trust that our
        trained technicians have the proper equipment, knowledge, and skill to
        make needed repairs and to keep your vehicle running safely down the
        road.
      </p>
    </Page>
  )
}

export default AlignmentPage
