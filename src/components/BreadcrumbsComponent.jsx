import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbsComponent = props => {
  return (
    <span className="flexThis">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {'>'}
      <Breadcrumb.Item href={props.nextOneUrl}>{props.nextOne}</Breadcrumb.Item>
      {'>'}
      <Breadcrumb.Item href={props.secondOneUrl}>
        {props.secondOne}
      </Breadcrumb.Item>
      {/* <Breadcrumb tag="nav" listTag="div">
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
      </Breadcrumb> */}
    </span>
  )
}

export default BreadcrumbsComponent
