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
          <h1 className="redText">Full Brake Package</h1>
          <h2>$179.99</h2>
          <p>
            Are your brakes stuttering or squealing? $179.99* includes: Quality
            upgraded brake pads New rotors Installation *per axle on most cars,
            plus tax and surcharge
          </p>
          <FormActions>
            <button className="contactSendDiv" type="submit">
              Redeem Now
            </button></FormActions>
            <div className="specialsActions"><p>Exp. 6/1/2020</p>
            <p>Print Coupon</p></div>
            
          
        </div>
        <div className="specialsSpacer">hi </div>
      </div>
    </Page>
  )
}

export default SpecialsPage
