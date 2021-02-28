import styled from 'styled-components'
import { device } from '../../../../../../../utils/constants/mediaQueries'
import { PageHero, Main as M } from '../../../../../widgets/basic'

export const Hero = styled(PageHero)`
  div.content {
    width: 90%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1 {
    font-size: ${p => p.theme.fontSize.jumbo};
    margin-bottom: 10px;
    line-height: 35px;
  }
  div.c-content {
    background: rgba(0,0,0,.5);
    padding: 10px;
    max-width: 450px;
    border-radius: 10px;
  }
`

export const Main = styled(M)`
  margin-top: -60px;
  padding: 0 20px 100px 20px;
  div.navigator {
    padding-bottom: 20px;
  }
  @media ${device.tablet} {
    margin: -100px auto 0 auto;
  }
  @media ${device.laptopL} {
    padding: 0 0 30px 0;
  }
`

export const Form = styled.div`
  width: 100%;
`

export const End = styled.div`
  margin-top: 75px;
  p {
    margin: 0;
  }
  p.title {
    font-weight: 700;
    margin-bottom: 5px;
  }
  p.text {
    font-size: ${p => p.theme.fontSize.small};
  }
`