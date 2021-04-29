import React from 'react'

import { PageTitle } from 'app/global/smart'
import { Section } from '../AboutStyle'

export default () => {
  return (
    <Section>
      <PageTitle title={'About Us - FAQs'} />
      <div className='title'>
        <p>Frequently Asked Questions</p>
      </div>
      <div className='sec-content'>
        <p>(FAQs goes here)</p>
      </div>
    </Section>
  )
}