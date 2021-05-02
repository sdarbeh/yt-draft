import { ClientContainer } from 'app/client/widgets/smart'
import { hiwAssets } from 'assets/public'
import React from 'react'
import styled from 'styled-components'
import { Hero } from './HiwStyle'

export default () => {
  return (
    <ClientContainer pageTitle='How it works'>
      <Hero bg={hiwAssets.hero}>
        <h1>How it works</h1>
      </Hero>
      <Container>
      </Container>
    </ClientContainer>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`