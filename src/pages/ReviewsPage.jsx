import React from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const ReviewsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/ReviewsPage'} />
      REVIEWS DISPLAY HERE
    </Page>
  )
}

export default ReviewsPage
