import { ReportConcernForm } from 'app/client/features'
import { Main, PageHero } from 'app/client/widgets/basic'
import { ClientContainer } from 'app/client/widgets/smart'
import { contactAssets } from 'assets/public'
import React from 'react'
import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'

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

const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${mediaQ.tablet} {
      padding: 40px 0;
    }
  }
`

const Heading = styled.div`
  margin-bottom: 50px;
  h2 {
    font-size: ${p => p.theme.font.jumbo};
    margin: 0 0 15px 0;
  }
  p {
    margin: 0 0 10px 0;
  }
`