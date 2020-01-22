import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const CarSalesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent
        nextOne={'Car Sales'}
        nextOneUrl={'/CarSalesPage'}
      />
    </Page>
  )
}

export default CarSalesPage
