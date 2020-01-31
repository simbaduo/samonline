import React from 'react'

import AppointmentRequestForm from '../components/AppointmentRequestForm'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Page from '../components/Page'

const AppointmentPage = () => {
  return (
    <>
    <Page>
      <div className="customBreadCumbSpacing"><BreadcrumbsComponent
        nextOne={'Appointments'}
        nextOneUrl={'/AppointmentPage'}
      /></div>
      
      <AppointmentRequestForm />
    </Page>
    </>
  )
}

export default AppointmentPage
