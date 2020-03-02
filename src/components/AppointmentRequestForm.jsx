import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`

const Form = styled.form`
  margin: 0 auto;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0 0 1rem 0;

  label {
    margin: 0 0 0.5rem 0;
  }

  input,
  textarea,
  select {
    font-size: 1rem;
    padding: 1rem;
  }

  textarea {
    // min-height: 30vh;
  }

  select {
    height: 40px;
    padding: 4px;
    line-height: 32px;
    text-indent: 4px;
    cursor: pointer;
  }
`

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

/** NOTE: this is currently just a copy of EmailForm! */
// TODO: Add proper form fields for an appointment
// Add Calendar datepicker
// Hook up to proper api endpoint for submission...
const AppointmentRequestForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [reason, setReason] = useState('')
  const [requestedAppointment, setRequestedAppointment] = useState([])
  const [makeData, setMakeData] = useState([])
  const [modelData, setModelData] = useState([])
  const [yearData, setYearData] = useState([])
  const [secondChoiceAppointment, setSecondChoiceAppointment] = useState([])
  // const [closeWindow, setCloseWindow] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // BONUS: add a "submitting..." state to your button
  const onSubmit = async event => {
    // prevents the page from refreshing
    event.preventDefault()

    const response = await axios.post('https://samonlineback.herokuapp.com/api/email', {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      make: make,
      model: model,
      year: year,
      reason: reason,
      requestedAppointment: requestedAppointment,
      secondChoiceAppointment: secondChoiceAppointment,
    })

    console.log(response.data)
    setSubmitted(true)
  }

  useEffect(() => {
    const makeApiCall = async () => {
      const resp = await axios.get(`//samonlineback.herokuapp.com/make`)
      if (resp.status === 200) {
        setMakeData(resp.data.terms)
        console.log(resp.data.terms)
      } else console.log(resp.data)
    }
    makeApiCall()
  }, [])

  const modelApiCall = async () => {
    if (make) {const resp = await axios.get(`//samonlineback.herokuapp.com/make/${make}/model`)
    if (resp.status === 200) {
      setModelData(resp.data.terms)
    }

    console.log(resp.data)}
    
  }
  useEffect(() => {
    modelApiCall()
  }, [make])

  const yearApiCall = async (make, model) => {
    console.log(`${make} ${model}, in year api`)
    console.log(`//samonlineback.herokuapp.com/make/${make}/model/${model}`)
    const resp = await axios.get(
      `//samonlineback.herokuapp.com/make/${make}/model/${model}`
    )
    if (resp.status === 200) {
      setYearData(resp.data.terms)
    }
  }

  useEffect(() => {
    if (make && model) yearApiCall(make, model)
  }, [make, model])



  if (!submitted) {
return (
    <>
      <div className="appointmentTitle">
        <h1>Personal Information</h1>
      </div>
      <Container>
        <Form onSubmit={onSubmit}>
          <div className="nameContainer">
            <FormField>
              <label>First Name</label>
              <input
                name="firstName"
                id="firstName"
                type="text"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                required
              />
            </FormField>
            <FormField>
              <label>Last Name</label>
              <input
                name="lastName"
                id="lastName"
                type="text"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                required
              />
            </FormField>
          </div>
          <div className="emailContainer">
            {' '}
            <FormField>
              <label>Email</label>
              <input
                name="email"
                id="email"
                type="text"
                onChange={e => setEmail(e.target.value)}
                value={email}
                required
              />
            </FormField>
            <div></div>
          </div>
          <div className="phoneContainer">
            {' '}
            <FormField>
              <label>Phone</label>
              <input
                className="phoneInput"
                name="phoneNumber"
                id="phoneNumber"
                type="text"
                onChange={e => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                required
              />
            </FormField>
            <div className="phoneEmptyDiv"></div>
          </div>

          <FormField>
            <label>Make</label>
            <select
              id="make"
              onChange={e => setMake(e.target.value)}
              value={make}
              required
            >
              <option>{null}</option>
              {makeData.map(make => {
                return <option>{make}</option>
              })}
            </select>
          </FormField>
          <FormField>
            <label>Model</label>
            <select
              id="model"
              onChange={e => setModel(e.target.value)}
              value={model}
              required
            >
              <option>{null}</option>
              {modelData.map(model => {
                return <option>{model}</option>
              })}
            </select>
          </FormField>
          <FormField>
            <label>Year</label>
            <select
              name="year"
              id="year"
              type="number"
              onChange={e => setYear(e.target.value)}
              value={year}
              required
            >
              <option>{null}</option>
              {yearData.map(year => {
                return <option>{year}</option>
              })}
            </select>
          </FormField>
          <FormField>
            <label>Reason</label>
            <textarea
              rows="3"
              cols="10"
              className="reasonField"
              name="reason"
              id="reason"
              type="text"
              onChange={e => setReason(e.target.value)}
              value={reason}
              required
            >
              {' '}
            </textarea>
          </FormField>
          <FormField>
            <div className="scheduleTitles">
              {' '}
              <label>Requested Appointment</label>
              <label className="requestHeight">2nd Request (optional)</label>
            </div>

            <div className="scheduleInputDiv">
              <input
                className="scheduleCalendar"
                name="requestedAppointment"
                id="requestedAppointment"
                type="datetime-local"
                onChange={e => setRequestedAppointment(e.target.value)}
                value={requestedAppointment}
                required
              />
              <input
                className="scheduleCalendar"
                name="secondChoiceAppointment"
                id="secondChoiceAppointment"
                type="datetime-local"
                onChange={e => setSecondChoiceAppointment(e.target.value)}
                value={secondChoiceAppointment}
                required
              />
            </div>
            <div className="warningBox">
              <p>
                Please note that the date and time you requested may not be
                available.
              </p>
              <p>
                We will contact you to confirm your actual appointment details.
              </p>
            </div>
          </FormField>
          <FormActions>
            <button className="appointmentSendButton" type="submit">
              Send
            </button>
          </FormActions>
        </Form>
      </Container>
    </>
  )
  }
  else { return (
    <h1>Your Request Has Been Submitted! Thank You</h1>
  )
    
    // <a href="/Home">Home</a>
  }

  
}

export default AppointmentRequestForm