import React from 'react'

const AdviceServiceCouponComponent = () => {
  return (
    <div className="outterDiv">
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

      <div className="innerDiv">
        <div className="coupons">
          <h2>
            <span>Our</span> <em>Coupons</em>
          </h2>
        </div>
        <div className="cta">
          <p>
            Check out our Current Specials! Click to learn more.
          </p>
          <a href="/SpecialsPage" className="subscribeButton">
            Learn More
          </a>
        </div>
      </div>

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
    </div>
  )
}

export default AdviceServiceCouponComponent
