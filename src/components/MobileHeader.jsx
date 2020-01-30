import React from 'react'
import samlogo from '../images/samlogo.png'
import styled, { withTheme } from 'styled-components'
import stars from '../images/stars.png'

const Container = styled.div`
  @media (min-width: 901px) {
    display: none;
  }
`

const MobileHeader = () => {
  return (
    <>
      <Container>
        {' '}
        <div className="mobileHeader">
          <img height="160px" width="260px" src={samlogo} />
          <div className="mobileReviewBox">
            <p><strong>Beverly Hills Auto Repair</strong></p>
            <span className="inlineContainer">
              <img
                className="starsAdjust"
                width="60px"
                height="15px"
                src={stars}
              />
              <a href="/reviews" className="tiny">
                5 Star Rating Based On 123 Reviews
              </a>
            </span>
          </div>
          <div className="mobileContactBox">
            <span ClassName="inlineContainer">
              <span>Call Us:</span>
              <span className="redText">(352) 527 - 0440</span>
            </span>
            <p className="tiny">5546 N. Lecanto Hwy. Beverly Hills FL 34465</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default MobileHeader
