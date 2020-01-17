import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

const Form = styled.form`
  padding: 1rem;
  max-width: 960px;
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
    min-height: 30vh;
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
  const [make, setMake] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')

  // BONUS: add a "submitting..." state to your button
  const onSubmit = event => {
    // prevents the page from refreshing
    event.preventDefault()

    /** do something like... */
    const API_URL = 'https://localhost:5001/send/email'
    const ApptReqData = {
      firstName,
      lastName,
      email,
    }
    const sendAppointment = async () => {
      await axios.post(API_URL, ApptReqData)
    }
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormField>
          <label>First Name</label>
          <input
            name="firstName"
            id="firstName"
            type="text"
            onChange={setFirstName}
            value={firstName}
          />
        </FormField>
        <FormField>
          <label>Last Name</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            onChange={setLastName}
            value={lastName}
          />
        </FormField>
        <FormField>
          <label>Email</label>
          <input
            name="email"
            id="email"
            type="text"
            onChange={setEmail}
            value={email}
          />
        </FormField>
        <FormField>
          <label>Make</label>
          <input
            name="make"
            id="make"
            type="text"
            onChange={setMake}
            value={make}
          />
        </FormField>
        <FormField>
          <label>Model</label>
          <input
            name="model"
            id="model"
            type="text"
            onChange={setModel}
            value={model}
          />
        </FormField>
        <FormField>
          <label>Year</label>
          <input
            name="year"
            id="year"
            type="int"
            onChange={setYear}
            value={year}
          />
        </FormField>
        <FormActions>
          {/* <button type="submit" onSubmit={sendAppointment}> */}
          {/* Send Email */}
          <button type="submit">Send Email</button>
        </FormActions>
      </Form>
      <section>
        <p>Hi My name is nathan</p>
      </section>
    </Container>
  )
}

export default AppointmentRequestForm
