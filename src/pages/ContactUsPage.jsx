import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

import Page from '../components/Page'
import BreadcrumbsComponentExtra from '../components/BreadcrumbsComponentExtra'

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
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
  justify-content: flex-end;

  button {
    border-radius: 7px;
    background-color: black;
    color: white;
    padding: 0.5rem 1.5rem;
    cursor: pointer;
  }
`

const ContactUsPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = async event => {
    // prevents the page from refreshing
    event.preventDefault()

    const response = await axios.post('https://samonlineback.herokuapp.com/api/ContactUs', {
      name: name,
      email: email,
      phone: phone,
      subject: subject,
      message: message,
    })
    setSubmitted(true)
  }

  if (!submitted){
  return (
    <>
      <Page>
        <div className="contactUsContainer">
          <h3>How Can We Help?</h3>
        </div>
        <Container>
          <Form onSubmit={onSubmit}>
            <div className="nameContainer">
              <FormField>
                <label>Name</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  onChange={e => setName(e.target.value)}
                  value={name}
                  required
                />
              </FormField>
            </div>
            <div className="nameContainer">
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
                  name="phone"
                  id="phone"
                  type="text"
                  onChange={e => setPhone(e.target.value)}
                  value={phone}
                  required
                />
              </FormField>
              <div className="phoneEmptyDiv"></div>
            </div>

            {/* <FormField>
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
          </FormField> */}
            <FormField>
              <label>Subject</label>
              <input
                // rows="3"
                // cols="10"
                // className="reasonField"
                name="subject"
                id="subject"
                type="text"
                onChange={e => setSubject(e.target.value)}
                value={subject}
                required
              ></input>
            </FormField>

            <FormField>
              <label>Message</label>
              <textarea
                // rows="2"
                // cols="8"
                // className="reasonField"
                name="message"
                id="message"
                type="text"
                onChange={e => setMessage(e.target.value)}
                value={message}
                required
              ></textarea>
            </FormField>
            {/* <FormField>
            <div className="scheduleTitles">
              {' '}
              <label>Requested Appointment</label>
              <label>2nd Request (optional)</label>
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
          </FormField> */}
            <FormActions>
              <div className="contactSendContainer"><div className="contactSendDiv">
                <input className="contactSendButton" type="submit" value="Submit"/>
              </div></div>
              
            </FormActions>
          </Form>
        </Container>
      </Page>
    </>
  )
} else { return (
<>

  <Page><div className="contactUsCompleteDiv">
    <h1>Thank You For Your Feedback</h1>
    <h3 className="redText">Someone will be contacting you shortly.</h3>
  </div></Page></>


)}}

export default ContactUsPage
