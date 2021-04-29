import React from 'react'
import { PageTitle } from 'app/global/smart'
// items
import { Container, lorem } from '../LegalStyle'

export default () => {
  return (
    <Container>
      <PageTitle title={'Fair Housing Act'} />
      <div>
        <h2>Fair Housing Act</h2>
      </div>
      <div className="legal-content">
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
        <p>{lorem}</p>
      </div>
    </Container>
  )
}