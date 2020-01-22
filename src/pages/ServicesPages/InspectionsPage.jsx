import React from 'react'
import Page from '../../components/Page'
import BreadcrumbsComponentExtra from '../../components/BreadcrumbsComponentExtra'

const InspectionsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Digital Courtesy Inspections'}
        secondOneUrl={'/ServicesPages/InspectionsPage'}
      />
      GREEN YELLOW RED RED RED
    </Page>
  )
}

export default InspectionsPage
