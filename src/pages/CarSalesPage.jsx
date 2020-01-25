import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const CarSalesPage = () => {
  return (
    <Page>
      <div className="breadCrumbDiv">
        <BreadcrumbsComponent
          nextOne={'Car Sales'}
          nextOneUrl={'/CarSalesPage'}
        />
      </div>
      <div className="carTable">Testing where does it go now</div>
    </Page>
  )
}

export default CarSalesPage
