import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent2 from '../components/BreadcrumbsComponent2'

const CarSalesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent2
        nextOne={'Car Sales'}
        nextOneUrl={'/CarSalesPage'}
      />
    </Page>
  )
}

export default CarSalesPage
