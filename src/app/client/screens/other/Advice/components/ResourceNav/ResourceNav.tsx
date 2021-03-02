import React from 'react'
import { NavLink } from 'react-router-dom'
import { useMediaQuery } from '@material-ui/core'
import { device } from '../../../../../../../utils/constants/mediaQueries'
import { getHashPaths } from '../../../../../../../utils/helpers/methods'
import { client } from '../../../../../../../utils/routes/client'

import { Nav, Mobile } from './ResourceNavStyle'

const { glossary, buying, selling } = client.advice

export default (p: any) => {
  const matches = useMediaQuery(device.tablet)

  if (matches) return (
    <Content
      glossaryNav
      buyingNav
      sellingNav
      p={p}
    />
  )
  return (
    <MobileContainer p={p} />
  )
}

const Content = ({ glossaryNav, buyingNav, sellingNav, p }: any) => {
  return (
    <Nav {...p}>
      { glossaryNav && (
        <div>
          <NavLink to={glossary} className="rnav-title">Glossary</NavLink>
        </div>
      )}
      { buyingNav && (
        <div>
          <NavLink to={buying} className="rnav-title">Buying Advice</NavLink>
          <div className="rn-links">
            <NavLink to={client.buying_advice.buying}>Buying Your Home</NavLink>
            <NavLink to={client.buying_advice.closing}>Closing</NavLink>
            <NavLink to={client.buying_advice.ownership}>Home Ownership</NavLink>
            <NavLink to={client.buying_advice.rent_v_buying}>Renting vs. Buying</NavLink>
            <NavLink to={client.buying_advice.afford}>How much can I afford?</NavLink>
            <NavLink to={client.buying_advice.next}>Next Steps</NavLink>
          </div>
        </div>
      )}
      { sellingNav && (
        <div>
          <NavLink to={selling} className="rnav-title">Selling Advice</NavLink>
          <div className="rn-links">
            <NavLink to={client.selling_advice.sale}>The Sale</NavLink>
            <NavLink to={client.selling_advice.closing}>Beyond Closing</NavLink>
            <NavLink to={client.selling_advice.started}>Getting Started</NavLink>
            <NavLink to={client.selling_advice.contact}>Contact Us</NavLink>
          </div>
        </div>
      )}
    </Nav>
  )
}

const MobileContainer = (p: any) => {
  const path = getHashPaths()
  return (
    <Mobile {...p}>
      <Content
        glossaryNav={path.includes(glossary)}
        buyingNav={path.includes(buying)}
        sellingNav={path.includes(selling)}
      />
    </Mobile>
  )
}