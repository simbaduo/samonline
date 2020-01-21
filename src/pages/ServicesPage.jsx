import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import { NavLink } from 'react-router-dom'

const ServicesPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Services'} secondOne={'Electrical'} />
    </Page>
  )
}

export default ServicesPage
