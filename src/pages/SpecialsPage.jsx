import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const SpecialsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Specials'} nextOneUrl={'/SpecialsPage'} />
      U R VERY SPECIAL
    </Page>
  )
}

export default SpecialsPage
