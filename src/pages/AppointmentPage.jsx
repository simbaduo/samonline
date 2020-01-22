import React from 'react'

import AppointmentRequestForm from '../components/AppointmentRequestForm'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Page from '../components/Page'

const AppointmentPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent
        nextOne={'Appointments'}
        nextOneUrl={'/AppointmentPage'}
      />
      <AppointmentRequestForm />
    </Page>
  )
}

export default AppointmentPage
