import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { homeAssets } from '../../../../../../../assets/public'
import { device } from '../../../../../../../utils/constants/mediaQueries'
import { client } from '../../../../../../../utils/routes/client'

// items
import { CenteredDiv } from '../../../../../../global/basic'
import { Card as C } from '../style'


export default () => {
  return (
    <Container>
      <CenteredDiv className="hsec-title">
        <p>YT PROPERTIES</p>
        <p>(SHORT SLOGAN)</p>
      </CenteredDiv>
      <div className="h-cards">
        <Card>
          <CardImg bg={homeAssets.passion}>
            <span>Our Passion</span>
          </CardImg>
          <div className="amc-desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
            <Link to={client.about.company}>Learn more</Link>
          </div>
        </Card>
        <Card>
          <CardImg bg={homeAssets.faq}>
            <div>
              <span>Frequently</span>
              <br />
              <span>Asked</span>
              <br />
              <span>Questions</span>
            </div>
          </CardImg>
          <div className="amc-desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
            <Link to={client.about.faqs}>View Our FAQs</Link>
          </div>
        </Card>
        <Card>
          <CardImg bg={homeAssets.leadership}>
            <span>Our Leadership</span>
          </CardImg>
          <div className="amc-desc">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
            <Link to={client.about.team}>Meet our team</Link>
          </div>
        </Card>
      </div>
    </Container>
  )
}


const Container = styled.section`
  &, div.h-cards {
    display: grid;
    row-gap: 40px;
  }
  div.hsec-title {
    font-size: ${p => p.theme.fontSize.jumbo};
    font-weight: 600;
    text-transform: uppercase;
    flex-direction: column;
    height: max-content;
  }
  @media ${device.tablet} {
    grid-template-columns: 200px 1fr;
    column-gap: 50px; 
    &, div.h-cards {
      row-gap: unset;
    }
    div.h-cards {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 20px;
    }
    div.hsec-title {
      height: 100%;
    }
  }
`

const Card = styled.div`
  box-shadow: ${p => p.theme.btnShadow};
  border-radius: 2px;
  overflow: hidden;
  div.amc-desc {
    background: ${p => p.theme.primary};
    color: ${p => p.theme.globalColors.black};
    padding: 20px;
    display: grid;
    row-gap: 15px;
  }
  a {
    border: 1px solid;
    font-weight: 600;
    border-radius: 5px;
    text-transform: uppercase;
    padding: 5px 12px;
    width: max-content;
  }
`

const CardImg = styled(C)`
  width: 100%;
  height: 275px;
  font-size: ${p => p.theme.fontSize.jumbo};
`
