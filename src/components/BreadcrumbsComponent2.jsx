import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbsComponent2 = props => {
  return (
    <span className="flexThis">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      {'>'}
      <Breadcrumb.Item href={props.nextOneUrl}>{props.nextOne}</Breadcrumb.Item>
    </span>
  )
}

export default BreadcrumbsComponent2
