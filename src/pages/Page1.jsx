import React from 'react'
import EmailForm from '../components/EmailForm'

import Page from '../components/Page'

const Page1 = () => {
  return (
    <Page>
      <a href="/">
        <img height="150px" width="150px" src="./images/samlogo.svg" />
      </a>

      <EmailForm />
    </Page>
  )
}

export default Page1
