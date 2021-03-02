import React from 'react'
import { PageTitle } from '../../../../../../global/smart'
// items
import { TeamMemberCard } from '../../../../../widgets/common'
import { Section } from '../../AboutStyle'

export default () => {
  return (
    <Section>
      <PageTitle title={'Our Team - Company Profile'} />
      <div className='title'>
        <p>Our team</p>
      </div>
      <div className='sec-content'>
        <p>(Description)Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit quae assumenda esse quo id tempora, ipsam iste ratione nisi amet ducimus, et temporibus voluptatibus eaque. Animi vel aliquam possimus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla velit quae assumenda esse quo id tempora, ipsam iste ratione nisi amet ducimus, et temporibus voluptatibus eaque. Animi vel aliquam possimus.
        </p>
      </div>
      <div className='sec-team'>
        <TeamMemberCard
          name={'Logan Thompson'}
          title={'Owner'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          image={'https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        />
        <TeamMemberCard
          name={'Caroline George'}
          title={'Content Creator'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          image={'https://images.pexels.com/photos/5119214/pexels-photo-5119214.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        />
        <TeamMemberCard
          name={'John Doe'}
          title={'Head of Marketing'}
          description={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
          image={'https://images.pexels.com/photos/2344601/pexels-photo-2344601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'}
        />
      </div>
    </Section>
  )
}