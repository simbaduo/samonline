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
      <img
        alt="Directions to Swander's Automotive"
        width="800px"
        height="520px"
        src="./images/gpslocation.png"
      />
    </Page>
  )
}

export default DirectionsPage
