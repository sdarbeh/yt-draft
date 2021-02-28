import React from 'react'
import { Link } from 'react-router-dom'

import { phoneIcon } from '../../../../../assets/icons/widgets'
import { client } from '../../../../../utils/routes/client'
import { CenteredDiv, Logo } from '../../../../global/basic'
// items
import { MainLinks } from '../index'
import { Container, Sidebar, Main } from './FooterStyle'

export default () => {
  return (
    <Container>
      <div className="f-content">
        <Sidebar>
          <div className="f-p">
            <CenteredDiv>{phoneIcon}</CenteredDiv>
            <a href="tel:123-456-7890">123-456-7890</a>
          </div>
          <div className="f-links">
            <Link to={client.contact.main}>Contact Us</Link>
            <Link to={client.about.faqs}>FAQs</Link>
            <Link to={client.sitemap}>Sitemap</Link>
            <Link to={client.legal.terms}>Terms & Conditions</Link>
            <Link to={''}>Accessibilty</Link>
            <Link to={client.legal.privacy}>Privacy Policy</Link>
          </div>
        </Sidebar>
        <Main>
          <div className="flm">
            <p className="fl-t">Site</p>
            <div>
              <MainLinks regLinks />
            </div>
          </div>
          <div className="flm">
            <p className="fl-t">General</p>
            <div>
              <Link to={client.legal.fair_housing}>Fair Housing Act</Link>
              <Link to={client.legal.fraud_alert}>Fraud Alert</Link>
            </div>
          </div>
          <div className="flm">
            <p className="fl-t">About YTP</p>
            <div>
              <Link to={client.about.company}>Company Profile</Link>
              <Link to={client.about.main}>About Us</Link>
              <Link to={client.about.team}>Our Team</Link>
            </div>
          </div>
          <div className="flm">
            <p className="fl-t">Real Estate Resources</p>
            <div>
              <Link to={client.advice.selling}>Home Seller Resources</Link>
              <Link to={client.advice.buying}>Home Buyer Resources</Link>
              <Link to={client.advice.glossary}>Real Estate Glossary</Link>
              <Link to={client.calculators.main}>Mortgage Calculators</Link>
            </div>
          </div>
        </Main>
      </div>
      <div className={'legal'}>
        <Logo />
        <p>&copy;&nbsp;{new Date().getFullYear()} YT Properties LLC. All rights reserved. Listing information is deemed reliable but not guaranteed accurate.</p>
      </div>
    </Container>
  )
}