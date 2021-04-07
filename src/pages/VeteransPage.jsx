import React, {useState, useEffect} from 'react'
import Page from '../components/Page'
import styled from 'styled-components'
import Axios from 'axios'

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

const VeteransPage = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [birthday, setBirthday] = useState([])
  const [yearsServed, setYearsServed] = useState()
  const [branch, setBranch] = useState('')
  const [rank, setRank] = useState('')
  const [stationed, setStationed] = useState('')
  const [experiences, setExperiences] = useState('')

  const [completed, setCompleted] = useState(false)


  const onSubmit = async e => {

    e.preventDefault()

    const response = await Axios.post('https://samonline.herokuapp.com/api/', {
      firstName: firstName,
      lastName: lastName,
      birthday: birthday,
      // years: years,
      branch: branch,
      rank: rank,
      stationed: stationed,
      experiences: experiences,
    })
    console.log(response.data)
    setCompleted(true)
  }

  // useEffect(() => {
  //   const apiCall = async () => {
  //     const resp = await Axios.get(https://https://samonline.herokuapp.com/api/Veteran)

  //   }
  // })

  if (!completed) { 
    return (
    <>
    <Page>
    <div className="veteranTopSection">
        <h1>Share Your Experience</h1>
        <p>As a way to say thank you, we hold a random drawing every month for veterans to win a free oil change of your choice. Winners will be chosen every month on the first Friday of the month.</p>
      </div>
<Container>
<Form onSubmit={onSubmit}>
  <div className="nameContainer">
    <FormField>
      <label>First Name</label>
      <input name="firstName"
             id="firstName"
             type="text"
             onChange={temp => setFirstName(temp.target.value)}
             value={firstName}
             required
              />
    </FormField>
    <FormField>
      <label>Last Name</label>
      <input name="lastName"
             id="lastName"
             type="text"
             onChange={temp => setLastName(temp.target.value)}
             value={lastName}
             required
              />
    </FormField>
  </div>
    <div className="nameContainer">
    <FormField>
      <label>Birthday</label>
      <input name="birthday"
             id="birthday"
             type="text"
             onChange={temp => setBirthday(temp.target.value)}
             value={birthday}
             required
              />
    </FormField>
    </div>
    <div className="nameContainer">

    <FormField>
      <label>Years Served</label>
      <input name="yearsServed"
             id="yearsServed"
             type="text"
             onChange={temp => setYearsServed(temp.target.value)}
             value={yearsServed}
             required
              />
    </FormField>
    </div>
    <FormField>
      <label>Branch</label>
      <input name="branch"
             id="branch"
             type="text"
             onChange={temp => setBranch(temp.target.value)}
             value={branch}
             required
              />
    </FormField>
    <FormField>
      <label>Rank</label>
      <input name="rank"
             id="rank"
             type="text"
             onChange={temp => setRank(temp.target.value)}
             value={rank}
             required
              />
    </FormField>
    <FormField>
      <label>Station Location</label>
      <input name="stationed"
             id="stationed"
             type="text"
             onChange={temp => setStationed(temp.target.value)}
             value={stationed}
             required
              />
    </FormField>
    <FormField>
      <label>Notable Experiences</label>
      <input name="experiences"
             id="experiences"
             type="text"
             onChange={temp => setExperiences(temp.target.value)}
             value={experiences}
             required
              />
    </FormField>
    <FormActions>
            <button className="appointmentSendButton" type="submit">
              Submit
            </button>
          </FormActions>
</Form>
</Container>
    </Page>
    </>
  )
} else { return (
  <h1>Your Request Has Been Submitted! Thank You</h1>
)
}
  
}

export default VeteransPage
