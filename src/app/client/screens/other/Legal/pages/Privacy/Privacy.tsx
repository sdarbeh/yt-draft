import React from 'react'
// items
import { PageTitle } from '../../../../../../global/smart'
import { Container, lorem } from '../../LegalStyle'

export default () => {
  return (
    <Container>
      <PageTitle title={'Privacy Policy'} />
      <div>
        <h2>Privacy Policy</h2>
      </div>
      <div className="legal-content">
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
      </div>
    </Container>
  )
}