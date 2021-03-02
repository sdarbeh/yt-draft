import React from 'react'
import { useTranslation } from "react-i18next";
import { client } from '../../../../../../../utils/routes/client'
// items
import { ClientContainer } from '../../../../../widgets/smart'
import { Main } from '../../../../../widgets/basic'
import { Hero, CanWeHelp, Link, OptContainer, OptionCard, Option, General, Report } from './MainStyle'

export default () => {

  return (
    <ClientContainer pageTitle={'Contact Us'}>
      <Hero bg={'https://www.drhorton.com/-/media/Files/Area-Info-Images/OK-Tulsa.ashx?h=1040&w=1980&la=en&hash=4FF82396BBC2976F824B41655DEB5245E8BB60B5'} border>
        <h1>Contact</h1>
      </Hero>
      <Main>
        <CanWeHelp>
          <h2>How can we help?</h2>
          <hr />
          <p>YT Properties is here to help you have an extraordinary experience.</p>
        </CanWeHelp>
        <OptContainer>
          <Option
            bg={'https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
            t={false}
          >
            <div />
            <div>
              <h3>Find a home</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.properties.main} className='theme'>Find in your area</Link>
            </div>
          </Option>
          <Option
            bg={'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
            t
          >
            <div />
            <div>
              <h3>List your home</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.contact.list}>List with confidence</Link>
            </div>
          </Option>
        </OptContainer>
        <General>
          <OptionCard className='general-q-card'>
            <div />
            <div>
              <h3>General Questions</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.contact.ask}>Ask us a question</Link>
            </div>
          </OptionCard>
        </General>
        <Report>
          <div>
            <p className={'title'}>Report&nbsp;a Concern</p>
            <hr />
            <p className={'desc'}>Questions, comments, or other concerns?</p>
          </div>
          <Link to={client.contact.report}>Report&nbsp;a&nbsp;concern</Link>
        </Report>
      </Main>
    </ClientContainer>
  )
}