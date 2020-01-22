import React from 'react'
import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const BatteryPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Batteries / Alternators / Starters'}
        secondOneUrl={'/ServicesPages/BatteryPage'}
      />
      CHARGE ME UP
    </Page>
  )
}

export default BatteryPage
