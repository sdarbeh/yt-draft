import React from 'react'
import { notFoundAssets } from '../../../../../assets/public'
// items
import { ClientContainer } from '../../../widgets/smart'
import { Main } from '../../../widgets/basic'
import { Hero } from './NotFoundStyle'
import { PageTitle } from '../../../../global/smart'

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
