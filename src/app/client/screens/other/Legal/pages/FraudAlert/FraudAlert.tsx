import React from 'react'
// items
import { PageTitle } from '../../../../../../global/smart'
import { Container, lorem } from '../../LegalStyle'

export default () => {
  return (
    <Container>
      <PageTitle title={'Real Estate Fraud'} />
      <div>
        <h2>Real Estate Fraud</h2>
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