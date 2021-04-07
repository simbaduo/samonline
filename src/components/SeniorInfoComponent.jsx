import React, { useState } from 'react'
import axios from 'axios'

const SeniorInfoComponent = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [school, setSchool] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async event => {

  event.preventDefault()

  const response = await axios.post(
    'https://samonlineback.herokuapp.com/api/appointment',
    {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      school: school,
    }
  )

  setSubmitted(true)
  }

  return (
    <>
    <h1 className="seniorsTitle">Seniors 2020 Give Back</h1>
      <div>
      <form onSubmit={onSubmit}>
        <div className="homeScheduleContainer">
          <div className="homeScheduleInnerDiv">
            <div className="row">
              <div className="control">
                <label htmlFor="firstName">First Name</label>
                <input
                  name="firstName"
                  id="firstName"
                  className="lineInput"
                  type="text"
                  onChange={e => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </div>
              <div className="control">
                <label>Last Name</label>

                <input
                  className="lineInput"
                  id="lastName"
                  type="text"
                  onChange={e => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </div>
              <div className="control">
                <label>Email</label>

                <input
                  className="lineInput"
                  id="email"
                  type="text"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="control">
               
                <label>Phone</label>
                <input
                  className="lineInput"
                  id="phone"
                  type="text"
                  onChange={e => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                  required
                />
              </div> 
            </div>
            <div className="row">            
            <div className="control">
                {/* <label htmlFor="lastName">School</label> */}
                <label>School</label>
                <input
                  className="lineInput"
                  id="school"
                  type="text"
                  onChange={e => setSchool(e.target.value)}
                  value={school}
                  required
                />
              </div>
            </div>
            </div>
          </div>
          
            <div className="homeSchedulerSubmitButtonContainer">
              <button className="homeAppointmentButtonDiv" type="submit">
                Submit
              </button>
            </div>
      </form>
      </div>
    </>
  );
}

export default SeniorInfoComponent

