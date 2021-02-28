import React from 'react'

// items
import { ClientContainer } from '../../../../../widgets/smart'
import { ListPropertyForm } from '../../../../../features'
import { Hero, HeroContent, Main, Form, End } from './AcquireStyle'

export default () => {
  return (
    <ClientContainer pageTitle={'List a Property'}>
      <Hero>
        <HeroContent>
          <h1>List your home with confidence</h1>
          <div>
            <p>With YT properties, you will have the advantage of professional real estate agent who knows the ins and outs of home sales</p>
          </div>
        </HeroContent>
      </Hero>
      <Main>
        <Form>
          <ListPropertyForm />
        </Form>
        <End>
          <p className={'title'}>From listings to showings to negotiations, we're here for you.</p>
          <p className={'text'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quos modi, itaque est, in quia impedit quisquam reprehenderit, rerum libero earum quaerat architecto id accusamus porro. Quibusdam numquam quisquam id.</p>
        </End>
      </Main>
    </ClientContainer>
  )
}