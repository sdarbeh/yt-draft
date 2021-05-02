import { ClientContainer } from 'app/client/widgets/smart'
import styled from 'styled-components'

export default () => {
  return (
    <ClientContainer pageTitle={'Properties'}>
      <Container>
        <h1>Properties goes here</h1>
      </Container>
    </ClientContainer>
  )
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`