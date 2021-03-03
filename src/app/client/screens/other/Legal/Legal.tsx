import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { legalAssets } from '../../../../../assets/public'
// pages
import { NotFound } from '../../other'
import { Main as Home, Terms, Privacy, FairHousing, FraudAlert } from './pages'

// items
import { ClientContainer } from '../../../widgets/smart'
import { Main } from './LegalStyle'
import { client } from '../../../../../utils/routes/client'
import { PageHero } from '../../../widgets/basic'

export default (p: any) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [p.location.pathname])

  return (
    <ClientContainer pageTitle={'Legal Notices'}>
      <PageHero
        bg={legalAssets.hero}
        title={'Legal Notices'}
        withNav
      >
        <NavLink to={client.legal.fair_housing}><div>FHA</div></NavLink>
        <NavLink to={client.legal.terms}><div>Terms</div></NavLink>
        <NavLink to={client.legal.privacy}><div>Privacy</div></NavLink>
        <NavLink to={client.legal.fraud_alert}><div>Fraud</div></NavLink>
      </PageHero>
      <Main>
        <Switch>
          <Route path={client.legal.main} exact component={Home} />
          <Route path={client.legal.terms} exact component={Terms} />
          <Route path={client.legal.privacy} exact component={Privacy} />
          <Route path={client.legal.fair_housing} exact component={FairHousing} />
          <Route path={client.legal.fraud_alert} exact component={FraudAlert} />
          <Route path={'*'} component={() => <NotFound simple />} />
        </Switch>
      </Main>
    </ClientContainer>
  )
}