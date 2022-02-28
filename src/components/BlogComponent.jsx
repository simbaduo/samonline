import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
// import { render } from "react-dom";

// import "./styles.css";

const BlogComponent = ({ totalStars }) => {
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
    return window.location.replace('https://www.google.com/search?ei=KRgyXrr6EemkggfL94DYAw&q=Swander%27s+Auto&oq=Swander%27s+Auto&gs_l=psy-ab.3..0i22i10i30l2.56915387.56921579..56922239...4.0..0.101.1567.19j1......0....1..gws-wiz.......0i13i10i30j0i67j0i273j0i131j0j0i10j0i10i30j0i5i30j0i5i10i30j0i22i30j0i30j0i13j0i13i30.RvfNPe6GNiI&ved=0ahUKEwj6srCJ_qnnAhVpkuAKHcs7ADsQ4dUDCAs&uact=5#lrd=0x88e86e93df40cbf3:0x4a92447f07561798,3,,,')
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

export default BlogComponent
