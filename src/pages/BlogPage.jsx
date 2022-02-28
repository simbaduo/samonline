import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponentExtra from '../components/BreadcrumbsComponentExtra'

const BlogPage = () => {
  return (
    <Page>
      <BreadcrumbsComponentExtra
        nextOne={'Services'}
        nextOneUrl={'/ServicesPage'}
        secondOne={'Alignment'}
        secondOneUrl={'/ServicesPages/AlignmentPage'}
      />
      <h1 className="servicesTitle">Swander's Social Corner</h1>
      <p className="servicesBodyText">
      Coming Soon!
      </p>
    </Page>
  )
}

export default BlogPage
