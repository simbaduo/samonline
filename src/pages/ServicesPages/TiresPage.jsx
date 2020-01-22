import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const TiresPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Tires'}
        secondOneUrl={'/ServicesPages/TiresPage'}
      />
      GOODYEAR TIRES
    </Page>
  )
}

export default TiresPage
