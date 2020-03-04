import React, { useState, useEffect } from 'react'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'
import Axios from 'axios'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'


const ReviewsPage = () => {
  const [reviews, setReviews] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const getReviews = async () => {
    const resp = await Axios.get('https://samonlineback.herokuapp.com/api/Reviews')
    setReviews(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getReviews()
    // setLoaded(false)
  }, [])

  useEffect(() => {
    if (reviews !== null) {
      setLoaded(true)
    }
  }, [reviews])


  return (
    <>
    { !loaded ? (
    <>
    <Page>
    <h1>Loading...</h1>
    </Page>
    </>
) : (
    <>
          <Page withPadding={false}>
            <div className="manualPaddingDiv"><BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/reviews'} />
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
            <div className="reviewSubmitButtonContainer">
              <div className="reviewSubmitButtonInnerDiv">
              <a href="/SubmitReviewPage" className="reviewSubmitButton" type="Submit">Leave A Review!</a></div></div>
               
          </Page>
              </>
  )
    }
    </>
  )

// if (!loaded) {
//   return (
//     <>
//     <Page>
//     <h1>Loading...</h1>
//     </Page>
//     </>
//   )
//       } else {
        // return (
        //   <>
        //   <Page withPadding={false}>
        //     <div className="manualPaddingDiv"><BreadcrumbsComponent nextOne={'Reviews'} nextOneUrl={'/reviews'} />
        //     <div className="reviewTable">
        //       {reviews.map(reviews => {
        //         return (
        //           <div className="reviewBox">
        //             <ul className="reviewList">
        //               <div className="reviewInfo">
        //                 <li>{reviews.name}</li>
        //                 <li className="greyText">{reviews.date}</li>
        //                 <li className="starsImg">
        //                   <img
        //                     alt="5 Star Review Image"
        //                     height="30px"
        //                     width="150px"
        //                     src="./images/reviews.png"
        //                   />
        //                 </li>
        //               </div>
        //               <div className="reviewText">
        //                 <li>{reviews.reviewText}</li>
        //               </div>
        //             </ul>
        //           </div>
        //         )
        //       })}
        //     </div></div>
        //     <div className="reviewSubmitButtonContainer">
        //       <div className="reviewSubmitButtonInnerDiv">
        //       <a href="/SubmitReviewPage" className="reviewSubmitButton" type="Submit">Leave A Review!</a></div></div>
            
            
        //   </Page>
        //   </>
        // )
      // }
}

export default ReviewsPage
