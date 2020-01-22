import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const AccessoriesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Accessories'}
        secondOneUrl={'/ServicesPages/AccessoriesPage'}
      />
      ROUGH COUNTRY
    </Page>
  )
}

export default AccessoriesPage
