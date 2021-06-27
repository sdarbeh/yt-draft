import { ListPropertyForm } from 'app/client/features'
import { PageHero, Main as M } from 'app/client/widgets/basic'
import { ClientContainer } from 'app/client/widgets/smart'
import { contactAssets } from 'assets/public'
import React from 'react'
import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'

export default () => {
  return (
    <ClientContainer pageTitle={'List a Property'}>
      <Hero bg={contactAssets.list_hero}>
        <h1>Sell your home with confidence</h1>
        <div className='c-content'>
          <p>With YT properties, you will have the advantage of professional real estate agent who knows the ins and outs of home sales</p>
        </div>
      </Hero>
      <Main whiteNavigatorText>
        <Form>
          <ListPropertyForm />
        </Form>
        <End>
          <p className={'title'}>From listings, to showings, to negotiations, we're here for you.</p>
          <p className={'text'}>If you're in the Tulsa area and you want to sell your home fast, without the usual hassle, then give us a call at YT Properties. We pay cash for Tulsa homes as they are, with no repairs, fees, or showings.</p>
          <p>We know how time-consuming selling a house can be. That's why we offer an alternative for Tulsa home sellers. If you're looking to sell fast to avoid the time and stress or a circumstance like a foreclosure, probate, or more, let our process be your solution. Let us know about your property, and you could have a fair cash bid within 24 hours. </p>
        </End>
      </Main>
    </ClientContainer>
  )
}

export const Hero = styled(PageHero)`
  div.content {
    width: 90%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    font-size: ${p => p.theme.font.jumbo};
    margin-bottom: 10px;
    line-height: 35px;
  }
  div.c-content {
    background: rgba(0,0,0,.5);
    padding: 10px;
    max-width: 450px;
    border-radius: 10px;
  }
`

export const Main = styled(M)`
  margin-top: -60px;
  padding: 0 20px 100px 20px;
  div.navigator {
    padding-bottom: 20px;
  }
  @media ${mediaQ.tablet} {
    margin: -100px auto 0 auto;
  }
  @media ${mediaQ.laptopL} {
    padding: 0 0 30px 0;
  }
`

export const Form = styled.div`
  width: 100%;
`

export const End = styled.div`
  margin-top: 75px;
  p {
    margin: 0;
  }
  p.title {
    font-weight: 700;
    margin-bottom: 5px;
  }
  p.text {
    font-size: ${p => p.theme.font.small};
    margin-bottom: 5px;
  }
`