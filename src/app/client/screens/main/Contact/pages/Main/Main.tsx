import React from 'react'
import {useTranslation} from "react-i18next";
import { client } from '../../../../../../../utils/routes/client'
// items
import { ClientContainer } from '../../../../../widgets/smart'
import { Main } from '../../../../../widgets/basic'
import { Hero, CanWeHelp, Link, OptContainer, Option, Report } from './MainStyle'

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
          <Option t={false}>
            <div />
            <div>
              <h3>Find a home</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.properties.main} className='theme'>Find in your area</Link>
            </div>
          </Option>
          <Option t>
            <div />
            <div>
              <h3>List your home</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quia maiores aspernatur, totam aliquid accusantium quaerat odit dolor dolorum placeat ut, perspiciatis nemo recusandae praesentium corrupti exercitationem suscipit expedita ratione?</p>
              <Link to={client.contact.list}>List with confidence</Link>
            </div>
          </Option>
        </OptContainer>
        <h3 style={{ textAlign: 'center', marginTop: '50px' }}>(General questions goes here)</h3>
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