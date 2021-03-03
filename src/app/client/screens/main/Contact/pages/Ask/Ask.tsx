import React from 'react'
import { contactAssets } from '../../../../../../../assets/public'

// items
import { ClientContainer } from '../../../../../widgets/smart'
import { Main } from '../../../../../widgets/basic'
import { GeneralQsForm } from '../../../../../features'
import { Hero, Content, Heading } from './AskStyle'

export default () => {
  return (
    <ClientContainer pageTitle={'Ask a Question'}>
      <Hero bg={contactAssets.gen_hero} border>
        <h1>Ask a Question</h1>
      </Hero>
      <Main>
        <Content>
          <Heading>
            <h2>Thank you for contacting YT Properties</h2>
            <p>Using the form below, please provide as much detailed information as possible. The information you submit may be shared with our in-networks so that your concerns can be addressed.</p>
            <p>Please note that by providing your phone number and email address, you are providing consent for us to reach out to you via this method.</p>
          </Heading>
          <GeneralQsForm />
        </Content>
      </Main>
    </ClientContainer>
  )
}