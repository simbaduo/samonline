import React from 'react'

import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const TuneUpPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Tune Up / Preventative Maintenance'}
        secondOneUrl={'/ServicesPages/TuneUpPage'}
      />
      TIN MAN LUBE ME
    </Page>
  )
}
export default TuneUpPage
