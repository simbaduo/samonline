import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const BreadcrumbsComponent = props => {
  return (
    <div>
      <Breadcrumb tag="nav" listTag="div">
        <BreadcrumbItem tag="a" href="/">
          HOME
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="ServicesPage">
          SERVICES
        </BreadcrumbItem>
        <BreadcrumbItem className="carCrumb" tag="a" href="CarSalesPage">
          CAR SALES
        </BreadcrumbItem>
        <BreadcrumbItem active tag="SpecialsPage">
          SPECIALS
        </BreadcrumbItem>
        <BreadcrumbItem active tag="AppointmentsPage">
          APPOINTMENTS
        </BreadcrumbItem>
        <BreadcrumbItem active tag="AboutUsPage">
          ABOUT US
        </BreadcrumbItem>
        <BreadcrumbItem active tag="ReviewsPage">
          REVIEWS
        </BreadcrumbItem>
        <BreadcrumbItem active tag="DirectionsPage">
          DIRECTIONS
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbsComponent
