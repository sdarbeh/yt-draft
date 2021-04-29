import { GeneralQsForm } from "app/client/features"
import { Main, PageHero } from "app/client/widgets/basic"
import { ClientContainer } from "app/client/widgets/smart"
import { contactAssets } from "assets/public"
import React from "react"
import styled from "styled-components"
import { device } from "utils/constants/mediaQueries"

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

const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${device.tablet} {
      padding: 40px 0;
    }
  }
`

const Content = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 400px 1fr;
    column-gap: 40px;
  }
`

const Heading = styled.div`
  margin-bottom: 50px;
  h2 {
    font-size: ${p => p.theme.fontSize.jumbo};
    margin: 0 0 15px 0;
  }
  p {
    margin: 0 0 10px 0;
  }
`