import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Form = styled.form`
  padding: 1rem;
  max-width: 960px;
  margin: 0 auto;
`;

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
`;

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
`;

const EmailForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const onSubmit = (event) => {
    // prevents the page from refreshing
    event.preventDefault();

    /** do something like... */
    // const API_URL = 'www.google.com';
    // axios.post(API_URL, {
    //   firstName,
    //   lastName,
    //   email,
    // });
  };

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
        <FormActions>
          <button type="submit">Send Email</button>
        </FormActions>
      </Form>
    </Container>
  );
}

export default EmailForm;
