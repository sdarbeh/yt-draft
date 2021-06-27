import { TeamMemberCard } from 'app/client/widgets/common'
import { PageTitle } from 'app/global/smart'
import React from 'react'
// items
import { Section } from '../AboutStyle'

export default () => {
  return (
    <Section>
      <PageTitle title={'Our Team - Company Profile'} />
      <div className='title'>
        <p>Our team</p>
      </div>
      <div className='sec-content'>
        <p>YT Properties is a local and family company based in Tulsa, OK. Logan Thompson, founder and CEO, and his wife Kelsey Thompson are both local Tulsan's, born and raised. They love their city and are passionate about helping the people in it. Logan began his career in construction, which eventually led to his love of real estate and remodeling. YT Properties is Logan and Kelsey's way to help make Tulsa beautiful and to help Tulsa families, one street at a time. Logan and Kelsey love helping their neighbors and remodeling Tulsa's homes. </p>
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