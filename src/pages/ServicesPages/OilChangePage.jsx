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
      GET YA OIL CHANGED HERE
    </Page>
  )
}

export default OilChangePage
