import React from 'react'
import { client } from '../../../../../../../utils/routes/client'

//items
import { PageTitle } from '../../../../../../global/smart'
import { Section } from './MainStyle'
import { Link } from '../../AboutStyle'

export default () => {
  return (
    <div>
      <PageTitle title={'About Us - Our History, Team and FAQs'} />
      <Section bg={'https://images.pexels.com/photos/7095/people-coffee-notes-tea.jpg?auto=compress&cs=tinysrgb&h=750&w=1260'}>
        <div className='m-content'>
          <p className="title">Company Profile</p>
          <p>Learn about the history behind YT Properties.</p>
          <Link to={client.about.company}>View company profile</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section className='m-revert' bg={'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}>
        <div className='m-content'>
          <p className="title">Our Team</p>
          <p>Meet our team.</p>
          <Link to={client.about.team}>Meet our team members</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section bg={'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}>
        <div className='m-content'>
          <p className="title">FAQs</p>
          <p>Browse our Frequently Asked Questions.</p>
          <Link to={client.about.faqs}>See our FAQs</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
    </div>
  )
}