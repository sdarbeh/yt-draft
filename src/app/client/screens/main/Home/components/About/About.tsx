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
          <p className="amc-title">Our Passion</p>
          <div className="amc-content">
            <CardImg bg={homeAssets.passion}/>
            <div className="amc-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
              <Link to={client.about.company}>Learn more</Link>
            </div>
          </div>
        </Card>
        <Card>
          <p className="amc-title">Frequently Asked Questions</p>
          <div className="amc-content">
            <CardImg bg={homeAssets.faq}/>
            <div className="amc-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
              <Link to={client.about.faqs}>View Our FAQs</Link>
            </div>
          </div>
        </Card>
        <Card>
          <p className="amc-title">Our Leadership</p>
          <div className="amc-content">
            <CardImg bg={homeAssets.leadership}/>
            <div className="amc-desc">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem doloribus corporis ipsam odit adipisci laudantium ex molestias nostru.</p>
              <Link to={client.about.team}>Meet our team</Link>
            </div>
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
  div.amc-content {
    box-shadow: ${p => p.theme.btnShadow};
    border-radius: 2px;
    overflow: hidden;
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
  p.amc-title {
    font-size: ${p => p.theme.fontSize.xlarge};
    padding-bottom: 10px;
    text-transform: uppercase;
  }
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
`
