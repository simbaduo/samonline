import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const DirectionsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent
        nextOne={'Directions'}
        nextOneUrl={'/DirectionsPage'}
      />
      <img width="800px" height="520px" src="./images/gpslocation.png" />
    </Page>
  )
}

export default DirectionsPage
