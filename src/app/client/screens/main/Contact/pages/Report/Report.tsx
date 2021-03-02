import React from 'react'
import { contactAssets } from '../../../../../../../assets/public'

// items
import { ClientContainer } from '../../../../../widgets/smart'
import { Main } from '../../../../../widgets/basic'
import { ReportConcernForm } from '../../../../../features'
import { Hero, Heading } from './ReportStyle'

export default () => {
  return (
    <ClientContainer pageTitle={'Report a Concern'}>
      <Hero bg={contactAssets.report_hero} border>
        <h1>Customer Care</h1>
      </Hero>
      <Main>
        <Heading>
          <h2>Thank you for contacting YT Properties</h2>
          <p>Using the form below, please provide as much detailed information as possible. The information you submit may be shared with our in-networks so that your concerns can be addressed.</p>
          <p>Please note that by providing your phone number and email address, you are providing consent for us to reach out to you via this method.</p>
        </Heading>
        <ReportConcernForm />
      </Main>
    </ClientContainer>
  )
}