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
      SKURRRRT
    </Page>
  )
}

export default BrakesPage
