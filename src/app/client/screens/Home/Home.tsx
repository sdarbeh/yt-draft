import React from 'react'
import { Link } from 'react-router-dom'

import { downArrowIcon } from 'assets/icons/widgets'
// items
import { ClientContainer } from 'app/client/widgets/smart'
import { HomeHero, Main } from './HomeStyle'
// components
import { About, Resources } from './components'

export default () => {
  return (
    <ClientContainer pageTitle={'Home'}>
      <HomeHero>
        <div className='hero-logo'>
          <span>(HERO LOGO GOES HERE)</span>
        </div>
        <div className='hero-c'>
          <h1>INTRO GOES HERE</h1>
          <Link to={'*'}>LINK TO SOMETHING</Link>
        </div>
        <div className="hero-l">
          <div>{downArrowIcon}</div>
        </div>
      </HomeHero>
      <Main hideNavigator>
        <h3>(placeholder for some cool stuff)</h3>
        <About />
        <Resources />
      </Main>
    </ClientContainer>
  )
}