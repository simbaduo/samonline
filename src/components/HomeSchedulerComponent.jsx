import React from 'react'

const HomeSchedulerComponent = () => {
  return (
    <>
      <div className="topHalf">
        <div className="homeAppointmentInstructions">
          <h1>Schedule An Appointment</h1>
          <p>Let us know how we can help you. Request an appointment </p>
          <p>using the form below.</p>
        </div>
        <h1 className="centerArea"></h1>
        <div className="homeAppointmentPhoto"></div>
      </div>
      <div className="homeScheduleContainer">
        <div className="homeScheduleInnerDiv">
          <input
            className="lineInput"
            type="text"
            placeHolder="First Name"
          ></input>
          <input
            className="lineInput"
            type="text"
            placeHolder="Last Name"
          ></input>
          <input className="lineInput" type="text" placeHolder="Email"></input>
          <input className="lineInput" type="text" placeHolder="Phone"></input>
        </div>
      </div>
      <div className="homeAppointmentReasonContainer">
        <div className="homeAppointmentReasonDiv">
          <input
            className="homeAppointmentField"
            type="text"
            placeHolder="Appointment Reason"
          ></input>
        </div>
      </div>
    </>
  )
}

export default HomeSchedulerComponent
