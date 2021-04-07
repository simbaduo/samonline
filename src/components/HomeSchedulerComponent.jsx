import React, { useState } from 'react'
import axios from 'axios'

const HomeSchedulerComponent = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [reason, setReason] = useState('')
  const [requestedAppointment, setRequestedAppointment] = useState([])
  const [additionalNotes, setAdditionalNotes] = useState('')

  const onSubmit = async event => {
    // prevents the page from refreshing
    event.preventDefault()

    const response = await axios.post(
      'https://samonlineback.herokuapp.com/api/appointment',
      {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        reason: reason,
        requestedAppointment: requestedAppointment,
        additionalNotes: additionalNotes,

        // the code was like this, it still works but was set up incorrectly. Check above and below
        // additionalNotes,
        // setAdditionalNotes,
      }
    )

    console.log(response.data)
    // setSubmitted(true)
    props.setIsCompleted(true)
  }

  return (
    <>
      <div className="topHalf">
        <div className="homeAppointmentInstructions">
          <h1>Schedule An Appointment</h1>
          <p>
            Let us know how we can help you. Request an appointment using the
            form below.
          </p>
        </div>
        <div className="homeAppointmentPhoto"></div>
      </div>
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
                <label htmlFor="lastName">Last Name</label>

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
                <label htmlFor="lastName">Email</label>

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
                <label htmlFor="lastName">Phone</label>

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
                <label htmlFor="lastName">Reason</label>

                <input
                  className="lineInput"
                  id="reason"
                  type="text"
                  onChange={e => setReason(e.target.value)}
                  value={reason}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="control double">
                <label htmlFor="lastName">Vehicle Info</label>
                <input
                  className="lineInput"
                  id="additionalNotes"
                  type="text"
                  onChange={e => setAdditionalNotes(e.target.value)}
                  value={additionalNotes}
                  required
                />
              </div>
              <input
                className="scheduleCalendar2"
                name="requestedAppointment"
                id="requestedAppointment"
                type="datetime-local"
                onChange={e => setRequestedAppointment(e.target.value)}
                value={requestedAppointment}
                required
              />
              {/* <div className="control">
              <label htmlFor="date">Date</label>

              <input className="lineInput" id="firstName" type="date" />
            </div>
            <div className="control">
              <label htmlFor="time">Time</label>

              <input className="lineInput" id="firstName" type="time" />
            </div> */}
            </div>
            <div className="homeSchedulerSubmitButtonContainer">
              <button className="homeAppointmentButtonDiv" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {/* <div className="homeAppointmentReasonContainer">
        <div className="homeAppointmentReasonDiv">
          <input
            className="homeAppointmentField"
            type="text"
            placeHolder="Appointment Reason"
          ></input>
        </div>
      </div> */}
    </>
  )
}

export default HomeSchedulerComponent
