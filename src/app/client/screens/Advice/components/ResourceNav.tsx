import { useMediaQuery } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'
import { getHashPaths } from 'utils/helpers/methods'
import { client } from 'utils/routes/client'

const { glossary, selling } = client.advice

export default (p: any) => {
  const matches = useMediaQuery(mediaQ.tablet)

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

const Content = ({ glossaryNav, sellingNav, p }: any) => {
  return (
    <Nav {...p}>
      { glossaryNav && (
        <div>
          <NavLink to={glossary} className="rnav-title">Glossary</NavLink>
        </div>
      )}
      {/* { buyingNav && (
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
      )} */}
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
        // buyingNav={path.includes(buying)}
        sellingNav={path.includes(selling)}
      />
    </Mobile>
  )
}

export const Mobile = styled.div`
  border-bottom: 1px solid ${p => p.theme.bravo};
  padding-bottom: 30px;
`

export const Nav = styled.div`
  grid-area: resource;
  display: grid;
  row-gap: 30px;
  a {
    display: block;
    width: max-content;
  }
  a.rnav-title {
    font-size: ${p => p.theme.font.xlarge};
    text-transform: uppercase;
    font-weight: 600;
    position: relative;
    padding-bottom: 5px;
    &.active {
      color: unset;
      &::before {
        background: ${p => p.theme.primary};
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
      }
    }
  }
  div.rn-links {
    margin-top: 10px;
    display: grid;
    row-gap: 10px;
    a {
      padding-left: 15px;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  @media ${mediaQ.tablet} {
    padding-right: 30px;
    border-right: 1px solid ${p => p.theme.bravo};
  }
`