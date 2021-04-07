import React, {useState, useEffect} from 'react'
import Page from '../components/Page'
import styled from 'styled-components'
import SeniorInfoComponent from '../components/SeniorInfoComponent'
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
<Container>
<SeniorInfoComponent/>
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
