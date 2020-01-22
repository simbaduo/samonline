import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const AboutUsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'About Us'} nextOneUrl={'/AboutUsPage'} />
      Hi Im Nathan this is about Us
    </Page>
  )
}

export default AboutUsPage
