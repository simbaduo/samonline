import React from 'react'
import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const MiscPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Misc. / Additional Services'}
        secondOneUrl={'/ServicesPages/MiscPage'}
      />
      ANYTHING RANDOM ? ANYTHING ELSE ?
    </Page>
  )
}

export default MiscPage
