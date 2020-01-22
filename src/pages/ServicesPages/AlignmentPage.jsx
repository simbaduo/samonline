import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const AlignmentPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Alignment'}
        secondOneUrl={'/ServicesPages/AlignmentPage'}
      />
      ALIGN ME CAPN
    </Page>
  )
}

export default AlignmentPage
