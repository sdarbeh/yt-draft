import styled from 'styled-components'
import { device, maxWith } from '../../../../../../../utils/constants/mediaQueries'

export const Hero = styled.div`
  height: calc(300px - 5px);
  background: url('https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 10px 50px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeroContent = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    font-size: ${p => p.theme.fontSize.jumbo};
  }
  div {
    background: rgba(0,0,0,.5);
    padding: 10px;
    max-width: 450px;
    border-radius: 10px;
  }
  p {
    margin: 0;
  }
  @media ${device.tablet} { 
    max-width: ${maxWith};
  }
`

export const Main = styled.main`
  margin-top: -50px;
  padding: 0 20px 30px 20px;
  @media ${device.tablet} {
    margin: -30px auto 0 auto;
    max-width: ${maxWith};
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