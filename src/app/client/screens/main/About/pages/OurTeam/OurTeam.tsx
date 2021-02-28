import React from 'react'
import { PageTitle } from '../../../../../../global/smart'
// items
import { TeamMemberCard } from '../../../../../widgets/common'
import { Section } from '../../AboutStyle'

export default () => {
  return (
    <Section>
      <PageTitle title={'Our Team - Company Profile'} />
      <p className='title'>Our team</p>
      <div className='sec-content'>
        <p>(Description)Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit quae assumenda esse quo id tempora, ipsam iste ratione nisi amet ducimus, et temporibus voluptatibus eaque. Animi vel aliquam possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit quae assumenda esse quo id tempora, ipsam iste ratione nisi amet ducimus, et temporibus voluptatibus eaque. Animi vel aliquam possimus.
            </p>
      </div>
      <div className='sec-team'>
        <div className='sec-team-card'>
          <TeamMemberCard
            name={'Logan Thompson'}
            title={'Owner'}
            image={''}
          />
        </div>
        <div className='sec-team-card'>
          <TeamMemberCard
            name={'Caroline George'}
            title={'Bad bitch'}
            image={''}
          />
        </div>
        <div className='sec-team-card'>
          <TeamMemberCard
            name={'John Doe'}
            title={'< bruh...'}
            image={''}
          />
        </div>
      </div>
    </Section>
  )
}