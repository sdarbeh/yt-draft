import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../../../../../../utils/constants/mediaQueries'
import { client } from '../../../../../../../utils/routes/client'

export default (p: any) => {
  return (
    <Container {...p}>
      <div>
        <NavLink to={client.advice.glossary} className="rnav-title">Glossary</NavLink>
      </div>
      <div>
        <NavLink to={client.advice.buying} className="rnav-title">Buying Advice</NavLink>
        <div className="rn-links">
          <NavLink to={client.buying_advice.buying}>Buying Your Home</NavLink>
          <NavLink to={client.buying_advice.closing}>Closing</NavLink>
          <NavLink to={client.buying_advice.ownership}>Home Ownership</NavLink>
          <NavLink to={client.buying_advice.rent_v_buying}>Renting vs. Buying</NavLink>
          <NavLink to={client.buying_advice.afford}>How much can I afford?</NavLink>
          <NavLink to={client.buying_advice.next}>Next Steps</NavLink>
        </div>
      </div>
      <div>
        <NavLink to={client.advice.selling} className="rnav-title">Selling Advice</NavLink>
        <div className="rn-links">
          <NavLink to={client.selling_advice.sale}>The Sale</NavLink>
          <NavLink to={client.selling_advice.closing}>Beyond Closing</NavLink>
          <NavLink to={client.selling_advice.started}>Getting Started</NavLink>
          <NavLink to={client.selling_advice.contact}>Contact Us</NavLink>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  border-bottom: 1px solid ${p => p.theme.bravo};
  grid-area: resource;
  display: grid;
  row-gap: 30px;
  padding-bottom: 30px;
  a {
    display: block;
    width: max-content;
  }
  a.rnav-title {
    font-size: ${p => p.theme.fontSize.xlarge};
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
  @media ${device.tablet} {
    border-bottom: unset;
    padding-bottom: unset;
    padding-right: 30px;
    border-right: 1px solid ${p => p.theme.bravo};
  }
`