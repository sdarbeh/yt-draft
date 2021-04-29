import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

// pages
import { NotFound } from '../index'
import { Main as Home, CompanyProfile, OurTeam, FAQs } from './pages'

// items
import { PageHero } from 'app/client/widgets/basic'
import { ClientContainer } from 'app/client/widgets/smart'
import { Main, Contact, Link } from './AboutStyle'
import { client } from 'utils/routes/client'

export default (p: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [p.location.pathname])

  return (
    <ClientContainer pageTitle={'About Us'}>
      <PageHero
        bg={'https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
        title={'Learn more about TYP'}
        withNav
      >
        <NavLink to={client.about.company}><div>COMPANY</div></NavLink>
        <NavLink to={client.about.team}><div>TEAM</div></NavLink>
        <NavLink to={client.about.faqs}><div>FAQs</div></NavLink>
      </PageHero>
      <Main>
        <Switch>
          <Route path={client.about.main} exact component={Home} />
          <Route path={client.about.company} exact component={CompanyProfile} />
          <Route path={client.about.team} exact component={OurTeam} />
          <Route path={client.about.faqs} exact component={FAQs} />
          <Route path={'*'} component={() => <NotFound simple />} />
        </Switch>
        <Contact>
          <p className='about-c-t'>Contact</p>
          <div className='about-c-c'>
            <p>(slogan)Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <Link to={client.contact.main}>GET IN TOUCH</Link>
          </div>
        </Contact>
      </Main>
    </ClientContainer>
  )
}