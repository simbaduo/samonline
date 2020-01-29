import React, { useState, useEffect } from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Axios from 'axios'

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([])

  const getReviews = async () => {
    const resp = await Axios.get('https://samonlineback.herokuapp.com/api/Reviews')
    setReviews(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  return (
    <Page withPadding={false}>
      <div className="manualPaddingDiv"><BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/ReviewsPage'} />
      <div className="reviewTable">
        {reviews.map(reviews => {
          return (
            <div className="reviewBox">
              <ul className="reviewList">
                <div className="reviewInfo">
                  <li>{reviews.name}</li>
                  <li className="greyText">{reviews.date}</li>
                  <li className="starsImg">
                    <img
                      alt="5 Star Review Image"
                      height="30px"
                      width="150px"
                      src="./images/reviews.png"
                    />
                  </li>
                </div>
                <div className="reviewText">
                  <li>{reviews.reviewText}</li>
                </div>
              </ul>
            </div>
          )
        })}
      </div></div>
      
    </Page>
  )
}

export default ReviewsPage
