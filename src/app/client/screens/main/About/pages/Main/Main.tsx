import React from 'react'
import { client } from '../../../../../../../utils/routes/client'

//items
import { PageTitle } from '../../../../../../global/smart'
import { Section } from './MainStyle'
import { Link } from '../../AboutStyle'
import { aboutAssets } from '../../../../../../../assets/public'

export default () => {
  return (
    <div>
      <PageTitle title={'About Us - Our History, Team and FAQs'} />
      <Section bg={aboutAssets.company}>
        <div className='m-content'>
          <p className="title">Company Profile</p>
          <p>Learn about the history behind YT Properties.</p>
          <Link to={client.about.company}>View company profile</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section className='m-revert' bg={aboutAssets.team}>
        <div className='m-content'>
          <p className="title">Our Team</p>
          <p>Meet our team.</p>
          <Link to={client.about.team}>Meet our team members</Link>
        </div>
        <div className='m-media'>
          <div />
        </div>
      </Section>
      <Section bg={aboutAssets.faq}>
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