import React from 'react'

// items
import { ClientContainer } from '../../../../../widgets/smart'
import { ListPropertyForm } from '../../../../../features'
import { Hero, Main, Form, End } from './ListStyle'

export default () => {
  return (
    <ClientContainer pageTitle={'List a Property'}>
      <Hero bg={'https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}>
        <h1>List your home with confidence</h1>
        <div className='c-content'>
          <p>With YT properties, you will have the advantage of professional real estate agent who knows the ins and outs of home sales</p>
        </div>
      </Hero>
      <Main whiteNavigatorText>
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