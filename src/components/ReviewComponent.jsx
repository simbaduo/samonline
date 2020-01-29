import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import { render } from "react-dom";

// import "./styles.css";

const ReviewComponent = ({ totalStars }) => {
  const [starsSelected, selectStar] = useState(0)
  const [rated5Stars, setRated5Stars] = useState(false)
  const [ratedOther, setRatedOther] = useState(false)
  totalStars = 5

  const Star = ({ selected = false, onClick = f => f }) => (
    <div className={selected ? 'star selected' : 'star'} onClick={onClick} />
  )

  const goToPage = () => {
    if (starsSelected === 5) {
      setRated5Stars(true)
    } else {
      setRatedOther(true)
    }
  }

  if (rated5Stars) {
    return window.location.replace('https://www.google.com')
  } else if (ratedOther) {
    return <Redirect to="/ContactUsPage" />
  }

  return (
    <>
      <h1 className="reviewTitle">How Was Your Experience?</h1>
      <div className="reviewContainer">
        <div className="reviewInnerContainer">
          <div className="star-rating">
            {[...Array(totalStars)].map((n, i) => (
              <Star
                key={i}
                selected={i < starsSelected}
                onClick={() => selectStar(i + 1)}
              />
            ))}
            <p className="starCount">
              {starsSelected} of {totalStars} stars
            </p>
            <button onClick={goToPage} className="reviewSubmitButton">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReviewComponent
