import React from 'react'
// items
import { PageTitle } from '../../../../../../global/smart'
import { Container, lorem } from '../../LegalStyle'

export default () => {
  return (
    <Container>
      <PageTitle title={'Terms and Conditions'} />
      <div>
        <h2>Terms and Conditions</h2>
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
        <p>{lorem}</p>
        <p>{lorem}</p>
      </div>
    </Container>
  )
}