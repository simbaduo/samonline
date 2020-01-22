import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const ACPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'A/C Repair'}
        secondOneUrl={'/ServicesPages/ACPage'}
      />
      brr?
    </Page>
  )
}

export default ACPage
