import { PageHero, Main as M } from 'app/client/widgets/basic';
import { ClientContainer } from 'app/client/widgets/smart';
import { sitemapAssets } from 'assets/public';
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { device } from 'utils/constants/mediaQueries';
import { client } from 'utils/routes/client';

export default () => {

  return (
    <ClientContainer pageTitle={'Sitemap'}>
      <Hero bg={sitemapAssets.hero} border>
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
              <Link to={client.contact.sell}>Sell a Property</Link>
              <Link to={client.contact.report}>Report a concern</Link>
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

const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${device.tablet} {
      padding: 40px 0;
    }
  }
`

const Main = styled(M)`
  div.sitemap-content {
    display: grid;
    row-gap: 30px;
  }
  a {
    width: max-content;
  }
  a:hover {
    text-decoration: underline;
  }
  div.sm-s {
    p {
      color: ${p => p.theme.primary};
      font-size: ${p => p.theme.fontSize.xlarge};
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 15px;
    }
    div {
      display: grid;
      row-gap: 10px;
    }
  }
  div.sitemap-a-indent {
    padding-left: 15px;
  }
  @media ${device.tablet} {
    div.sitemap-content {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 50px;
    }
  }
`