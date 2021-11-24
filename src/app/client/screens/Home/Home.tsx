import React from 'react'
import { Link } from 'react-router-dom'

import { downArrowIcon } from 'assets/icons/widgets'
// items
import { ClientContainer } from 'app/client/widgets/smart'
import { HomeHero, Main } from './HomeStyle'
// components
import { About, Resources } from './components'
import { client } from 'utils/routes/client'

export default () => {
  return (
    <ClientContainer pageTitle='Home'>
      <HomeHero>
        <div className='hero-logo'>
          <span>(HERO LOGO GOES HERE)</span>
        </div>
        <div className='hero-c'>
          <h1>YT Properties will buy your house fast, with no realtor fees or inspections, so you can get back to living the life you love. </h1>
          <Link to={client.contact.sell}>Get my cash offers</Link>
        </div>
        <div className="hero-l">
          <div>{downArrowIcon}</div>
        </div>
      </HomeHero>
      <Main hideNavigator>
        <div className='desc_sec'>
          <p>YT Properties can help you sell your home faster than ever imagined. We pay cash for properties no matter the condition and make our bids in only 24 hours. You won't have to worry about making costly repairs or staging your home for tons of showings. Instead, the YT Properties team will buy your home, no matter the situation or condition.  We work with clients who want to sell their homes efficiently.</p>
          <p>We can even work with situations like:</p>
          <ul>
            <li>Foreclosure</li>
            <li>Bankruptcy</li>
            <li>Probate</li>
            <li>Inherited properties </li>
            <li>Liens</li>
            <li>More</li>
          </ul>
          <p>Give YT Properties a call today to learn how you can skip the typical home selling headache. </p>
        </div>
        <About />
        <Resources />
      </Main>
    </ClientContainer>
  )
}