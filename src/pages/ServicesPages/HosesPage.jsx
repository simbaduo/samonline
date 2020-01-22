import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const HosesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Hoses / Radiators / Starters'}
        secondOneUrl={'/ServicesPages/HosesPage'}
      />
      cooling system
    </Page>
  )
}

export default HosesPage
