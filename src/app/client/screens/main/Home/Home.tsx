import React from 'react'
import { Link } from 'react-router-dom'

import { downArrowIcon } from '../../../../../assets/icons/widgets'
// items
import { ClientContainer } from '../../../widgets/smart'
import { CenteredDiv } from '../../../../global/basic'
import { HomeHero, Main } from './HomeStyle'
// components
import { About } from './components'

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
          <button>
            <span>Learn More</span>
            <CenteredDiv>{downArrowIcon}</CenteredDiv>
          </button>
        </div>
      </HomeHero>
      <Main hideNavigator>
        <h3>(Homes goes here)</h3>
        <About />
        <h3>(Resources goes here)</h3>
      </Main>
    </ClientContainer>
  )
}