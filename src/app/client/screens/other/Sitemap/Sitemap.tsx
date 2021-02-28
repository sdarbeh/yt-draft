import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next";
import { client } from '../../../../../utils/routes/client'
// items
import { ClientContainer } from '../../../widgets/smart'
import { Hero, Main } from './SitemapStyle'


export default () => {

  return (
    <ClientContainer pageTitle={'Sitemap'}>
      <Hero bg={'https://images.pexels.com/photos/408503/pexels-photo-408503.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'} border>
        <h1>Sitemap</h1>
      </Hero>
      <Main>
        <div className="sitemap-content">
          <div className="sm-s">
            <p>Real Estate</p>
            <div>
              <Link to={client.contact.ask}>Find a Home</Link>
              <Link to={'*'}>Acquire</Link>
              <Link to={client.contact.ask}>Report a listing</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Calculators</p>
            <div>
              <Link to={client.calculators.mortage}>Mortage</Link>
              <Link to={client.calculators.afford}>Affordabilty</Link>
              <Link to={client.calculators.refinance}>Refinance</Link>
              <Link to={client.calculators.amortization}>Amortization</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>About Us</p>
            <div>
              <Link to={client.about.company}>Company Profile</Link>
              <Link to={client.about.team}>Our Team</Link>
              <Link to={client.about.faqs}>Frequently Asked Questions</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Advice</p>
            <div>
              <Link to={client.advice.glossary}>Glossary</Link>
              <Link to={client.advice.buying}>Buying</Link>
              <Link to={client.advice.selling}>Selling</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Buying Advice</p>
            <div>
              <Link to={client.buying_advice.buying}>Buying Your Home</Link>
              <Link to={client.buying_advice.closing}>Closing</Link>
              <Link to={client.buying_advice.ownership}>Home Ownership</Link>
              <Link to={client.buying_advice.rent_v_buying}>Renting vs. Buying</Link>
              <Link to={client.buying_advice.afford}>How much can I afford?</Link>
              <Link to={client.buying_advice.next}>Next Steps</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Selling Advice</p>
            <div>
              <Link to={client.selling_advice.sale}>The Sale</Link>
              <Link to={client.selling_advice.closing}>Beyond Closing</Link>
              <Link to={client.selling_advice.started}>Getting Started</Link>
              <Link to={client.selling_advice.contact}>Contact Us</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Contact Us</p>
            <div>
              <Link to={client.contact.ask}>Ask a Question</Link>
              <Link to={client.contact.ask}>List a Property</Link>
              <Link to={client.contact.ask}>Report a concern</Link>
            </div>
          </div>
          <div className="sm-s">
            <p>Legal Notices</p>
            <div>
              <Link to={client.legal.fair_housing}>Fair Housing Act</Link>
              <Link to={client.legal.fair_housing}>Real Estate Fraud Alert</Link>
              <Link to={client.legal.terms}>Terms and Conditions</Link>
              <Link to={client.legal.privacy}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </Main>
    </ClientContainer>
  )
}