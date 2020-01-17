import React from 'react'
import styled from 'styled-components'

import NavBar from './NavBar'
import HamburgerNav from './HamburgerNav'
import FooterNav from './FooterNav'
import { colors } from '../utils/theme'

const Container = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${colors.light};
`

const InnerContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/**
 * This is our basic page component
 */
const Page = ({ children }) => {
  return (
    <Container>
      <NavBar />
      <HamburgerNav />
      <InnerContainer>{children}</InnerContainer>
      <FooterNav />
    </Container>
  )
}

export default Page
