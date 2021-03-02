import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { client } from '../../../../../../../utils/routes/client'
import { homeAssets } from '../../../../../../../assets/public'
import { device } from '../../../../../../../utils/constants/mediaQueries'

import { Card as C } from '../style'

export default () => {
  return (
    <Container>
      <Card bg={homeAssets.calculator}>
        <div className="rmc-crdo">
          <span>Calculators</span>
        </div>
        <Link to={client.calculators.main} />
      </Card>
      <Card bg={homeAssets.glossary}>
        <div className="rmc-crde">
          <span>Real Estate</span>
          <br />
          <span>Glossary</span>
        </div>
        <Link to={client.advice.glossary} />
      </Card>
        <Card bg={homeAssets.buyer}>
        <div className="rmc-crdo">
          <span>Home Buyer</span>
          <br />
          <span>Resources</span>
        </div>
        <Link to={client.advice.buying} />
      </Card>
        <Card bg={homeAssets.sale}>
        <div className="rmc-crde">
          <span>Home Seller</span>
          <br />
          <span>Resources</span>
        </div>
        <Link to={client.advice.selling} />
      </Card>
    </Container>
  )
}

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  height: 300px;
  @media ${device.tablet} {
    row-gap: 15px;
    column-gap: 15px;
    margin: 0 auto;
    width: 650px;
    height: 650px;
  }
`

const Card = styled(C)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 650px;
  max-height: 650px;
  font-weight: 700;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  text-shadow: 2px 2px 3px rgb(0 0 0 / 23%);
  &, a {
    width: 100%;
    height: 100%;
  }
  div {
    transition: all .3s;
    text-align: center;
  }
  a {
    position: absolute;
    left: 0;
    top: 0;
  }
  &:hover {
    div.rmc-crdo {
      transform: scale(1.05) rotate(-3deg);
    }
    div.rmc-crde {
      transform: scale(1.05) rotate(3deg);
    }
  }
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSize.jumbo};
  }
`