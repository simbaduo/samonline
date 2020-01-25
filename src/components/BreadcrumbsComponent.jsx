import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbsComponent = props => {
  return (
    <span className="flexThis">
      <Breadcrumb.Item className="breadCrumbText" href="/">
        Home
      </Breadcrumb.Item>
      {'>'}
      <Breadcrumb.Item className="breadCrumbText" href={props.nextOneUrl}>
        {props.nextOne}
      </Breadcrumb.Item>
    </span>
  )
}

//could i combine both components??

export default BreadcrumbsComponent
