import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const DiagnosticsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Diagnostics'}
        secondOneUrl={'/ServicesPages/DiagnosticsPage'}
      />
      Chk Engine Light
    </Page>
  )
}

export default DiagnosticsPage
