import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`

const Form = styled.form``

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
  justify-content: center;

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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [resume, setResume] = useState('')

  // BONUS: add a "submitting..." state to your button
  const onSubmit = async event => {
    // prevents the page from refreshing
    event.preventDefault()

    /** do something like... */
    // const API_URL = 'https://localhost:5001/send/email'
    // const ApptReqData = {
    // firstName: firstName,
    // lastName: lastName,
    // email: email,
    // make: make,
    // model: model,
    // year: year,
    // }const sendAppointment = async () => {
    const response = await axios.post('//samonlineback.herokuapp.com/api/resume', {
      name: name,
      phone: phone,
      email: email,
      resume: resume,
    })
    console.log(response.data)
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <FormField>
          <label>Name</label>
          <input
            name="name"
            id="name"
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </FormField>
        <FormField>
          <label>Email</label>
          <input
            name="email"
            id="email"
            type="text"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </FormField>
        <FormField>
          <label>Phone</label>
          <input
            name="phone"
            id="phone"
            type="text"
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </FormField>
        <FormField>
          <label>Resume</label>
          <input
            name="resume"
            id="resume"
            type="text"
            onChange={e => setResume(e.target.value)}
            value={resume}
          />
        </FormField>
        <FormActions><div className="resumeSubmitContainer"><input type="submit" onSubmit={onSubmit} value="Submit" className="redeemButton"/>
</div>

          {/* Send Email */}
        </FormActions>
      </Form>
      {/* <button onClick={() => onSubmit()}>Send Email</button> */}
    </Container>
  )
}

export default AppointmentRequestForm
