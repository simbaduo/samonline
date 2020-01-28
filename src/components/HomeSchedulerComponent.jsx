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
        <div className="homeAppointmentPhoto"></div>
      </div>

      <div className="homeScheduleContainer">
        <div className="homeScheduleInnerDiv">
          <div className="row">
            <div className="control">
              <label htmlFor="firstName">First Name</label>
              <input name="firstName" className="lineInput" type="text" />
            </div>
            <div className="control">
              <label htmlFor="lastName">Last Name</label>

              <input
                className="lineInput"
                type="text"
              />
            </div>
            <div className="control">
            <label htmlFor="lastName">Email</label>

              <input className="lineInput" type="text"/>
            </div>
            <div className="control">
            <label htmlFor="lastName">Phone</label>

              <input className="lineInput" type="text" />
            </div>
          </div>
          <div className="row">
            <div className="control">
            <label htmlFor="lastName">Reason</label>

              <input
                className="lineInput"
                type="text"
              />
            </div>
          </div>
          <div className="row">
            <div className="control double">
            <label htmlFor="lastName">Vehicle Info</label>
              <input
                className="lineInput"
                type="text"
              />
            </div>
            <div className="control">
              <input className="lineInput" type="date" />
            </div>
            <div className="control">
              <input className="lineInput" type="time" />
            </div>
          </div>
        </div>
      </div>
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
