import React from 'react'
import styled from 'styled-components'

const ServicesContainer = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 3rem;
  margin-right: 5rem;
  margin-left: 5rem;
  justify-content: center;

  @media (max-width: 825px) {
    flex-direction: column;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`

const ServicesContainerChild = styled.div`
  flex: 1;
  padding: 1rem;
  margin: 1rem;
`

const AdviceServiceCouponComponent = () => {
  return (
    <ServicesContainer>
      <ServicesContainerChild>
        <div className="innerDiv">
          <div className="tips-advice">
            <h2>
              <span>Tips &amp;</span> <em>Advice</em>
            </h2>
          </div>
          <div className="cta">
            <p>
              Check out our advice on keeping your vehicle in excellent condition.
              Click to learn more.
            </p>
            <a href="/ServicesPages/TuneUpPage" className="subscribeButton">
              Learn More
            </a>
          </div>
        </div>
      </ServicesContainerChild>
      

      <ServicesContainerChild>
        <div className="innerDiv">
          <div className="coupons">
            <h2>
              <span>Our</span> <em>Coupons</em>
            </h2>
          </div>
          <div className="cta">
            <p>
            See our full list of automotive repairs and services. Click on the button below to learn more.
            </p>
            <a href="/SpecialsPage" className="subscribeButton">
              Learn More
            </a>
          </div>
        </div>
      </ServicesContainerChild>

      <ServicesContainerChild>
        <div className="innerDiv">
          <div className="services">
            <h2>
              <span>Our</span> <em>Services</em>
            </h2>
          </div>
          <div className="cta">
            <p>
              See our full list of automotive repairs and services. Click to learn
              more.
            </p>
            <a href="/ServicesPage" className="subscribeButton">
              Learn More
            </a>
          </div>
        </div>
      </ServicesContainerChild>
    </ServicesContainer>
  )
}

export default AdviceServiceCouponComponent
