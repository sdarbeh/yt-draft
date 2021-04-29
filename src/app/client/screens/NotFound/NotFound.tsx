import { Main } from 'app/client/widgets/basic'
import { Hero } from 'app/client/widgets/basic/PageHero/PageHeroStyle'
import { ClientContainer } from 'app/client/widgets/smart'
import { PageTitle } from 'app/global/smart'
import { notFoundAssets } from 'assets/public'
import React from 'react'

import { Content, Moved } from './components'

export default ({ simple, simpleNoLinks }: any) => {
  if (simple || simpleNoLinks) return (
    <>
      <PageTitle title={'404 - Page Not Found'} />
      {simple ? <Content /> : <Moved />}
    </>
  )

  return (
    <ClientContainer pageTitle={'404 - Page Not Found'}>
      <Hero bg={notFoundAssets.hero} border>
        <h1>Page Not Found</h1>
      </Hero>
      <Main>
        <Content />
      </Main>
    </ClientContainer>
  )
}
