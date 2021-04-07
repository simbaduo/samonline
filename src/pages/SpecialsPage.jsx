import React from 'react'
import styled from 'styled-components'

import Page from '../components/Page'
import BreadcrumbsComponent from '../components/BreadcrumbsComponent'

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    border-radius: 7px;
    background-color: black;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }
`

const SpecialsPage = () => {
  return (
    <Page>
      <BreadcrumbsComponent nextOne={'Specials'} nextOneUrl={'/SpecialsPage'} />
      <div className="specialsContainer">
        <div className="specialsBox">
          <h2 className="redText underline">Full Brake Package</h2>
          <h3>$199.99</h3>
          <p>
            Are your brakes stuttering or squealing? $199.99* includes: Quality
            upgraded brake pads New rotors Installation *per axle on most cars,
            plus tax and surcharge
          </p>
          <FormActions>
            <a href="/AppointmentPage" className="reviewSubmitButton">
              Redeem Now
            </a></FormActions>
            <div className="specialsActions"><h6>Exp. 6/1/2020</h6>
            <p>Print Coupon</p></div>
            
          
        </div>
        <div className="specialsSpacer"> </div>
      </div>
    </Page>
  )
}

export default SpecialsPage
