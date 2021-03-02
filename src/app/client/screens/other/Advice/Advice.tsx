import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { client } from '../../../../../utils/routes/client'

// pages
import { NotFound } from '../../other'
import { Buying, Selling, Glossary } from './pages'

// items
import { ClientContainer } from '../../../widgets/smart'
import { ResourceNav } from './components'
import { Main } from './AdviceStyle'
import { PageHero } from '../../../widgets/basic'

const { main, buying } = client.advice

export default ({ location: { pathname } }: any) => {
  if (pathname === main && pathname !== buying) return <Redirect to={buying} />

  return (
    <ClientContainer pageTitle={'Home Resources'}>
      <PageHero
        bg={'https://images.pexels.com/photos/5516226/pexels-photo-5516226.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'}
        title={'Home Resources'}
        withNav
      >
        <NavLink to={client.advice.glossary}><div>Glossary</div></NavLink>
        <NavLink to={client.advice.buying}><div>Buying</div></NavLink>
        <NavLink to={client.advice.selling}><div>Selling</div></NavLink>
      </PageHero>
      <Main>
        <div className="resource-content">
          <ResourceNav />
          <Switch>
            <Route path={client.advice.glossary} exact component={Glossary} />
            <Route path={client.advice.buying} component={Buying} />
            <Route path={client.advice.selling} component={Selling} />
            <Route path={'*'} component={() => <NotFound simpleNoLinks />} />
          </Switch>
        </div>
      </Main>
    </ClientContainer>
  )
}