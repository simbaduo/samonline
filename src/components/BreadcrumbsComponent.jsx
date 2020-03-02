import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

const BreadcrumbsComponent = props => {
  return (
    <span className="flexThis"><div className="homeBreadCrumb">
      <Breadcrumb.Item className="breadCrumbTextFirst" href="/">
        Home
      </Breadcrumb.Item></div>
      {'>'}
      <Breadcrumb.Item className="breadCrumbText" href={props.nextOneUrl}>
        {props.nextOne}
      </Breadcrumb.Item>
    </span>
  )
}

//could i combine both components??

export default BreadcrumbsComponent
