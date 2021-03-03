import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import { client } from '../../../../../utils/routes/client'

// pages
import { NotFound } from '../index'
import { Mortage, Afford, Refinance, Amortization } from './pages'

// items
import { ClientContainer } from '../../../widgets/smart'
import { Main } from '../../../widgets/basic'
import { Container } from './CalculatorsStyle'

const { main, mortage } = client.calculators

export default ({ location: { pathname } }: any) => {
  if (pathname === main && pathname !== mortage) return <Redirect to={mortage} />

  return (
    <ClientContainer pageTitle={'Calculators'}>
      <Container>
        <Main>
          <div className="calc-content">
            <div className="calc-nav">
              <NavLink to={mortage}>Mortage<span>&nbsp;Calculator</span></NavLink>
              <NavLink to={client.calculators.afford}>Affordabilty<span>&nbsp;Calculator</span></NavLink>
              <NavLink to={client.calculators.refinance}>Refinance<span>&nbsp;Calculator</span></NavLink>
              <NavLink to={client.calculators.amortization}>Amortization<span>&nbsp;Calculator</span></NavLink>
            </div>
            <div className="calc-calc">
              <Switch>
                <Route path={mortage} exact component={Mortage} />
                <Route path={client.calculators.afford} exact component={Afford} />
                <Route path={client.calculators.refinance} exact component={Refinance} />
                <Route path={client.calculators.amortization} exact component={Amortization} />
                <Route path={'*'} component={() => <NotFound simpleNoLinks />} />
              </Switch>
            </div>
          </div>
          <div className="calc-legal">
            <span>Calculators provided for estimating purposes only. Consult with your lender to determine precise payment requirements.</span>
            <br />
            <span>Navigating to another tab will clear calculated results.</span>
          </div>
        </Main>
      </Container>
    </ClientContainer>
  )
}