import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const SteeringPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Steering'}
        secondOneUrl={'/ServicesPages/SteeringPage'}
      />
      ROW ROW ROW THE WHEEL
    </Page>
  )
}

export default SteeringPage
