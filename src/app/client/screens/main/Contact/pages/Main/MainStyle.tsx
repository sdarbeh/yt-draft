import styled from 'styled-components'
import { Link as L } from 'react-router-dom'
import { device } from '../../../../../../../utils/constants/mediaQueries'
import { PageHero } from '../../../../../widgets/basic'

interface o {
  t: boolean;
  theme: any;
}

export const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${device.tablet} {
      padding: 40px 0;
    }
  }
`

export const CanWeHelp = styled.div`
  margin-bottom: 50px;
  h2 {
    text-transform: uppercase;
    margin: 0;
  }
  hr {
    background: ${p => p.theme.primary};
    height: 3px!important;
    width: 25px;
    margin: 10px auto 10px 0;
  }
`

export const OptContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  row-gap: 50px;
  @media ${device.tablet} { 
    grid-template-rows: unset;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }
`

export const Link = styled(L)`
  border: 1px solid;
  font-size: ${p => p.theme.fontSize.xsmall};
  font-weight: 700;
  border-radius: 2px;
  padding: 7px 15px;
  text-transform: uppercase;
  &.theme {
    border-color: ${p => p.theme.primary};
    color: ${p => p.theme.primary};
  }
`

export const Option = styled.div`
  background: ${(p: o) => p.t ? p.theme.primary : p.theme.bravo};
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 4px 2px 30px -10px ${p => p.theme.sBravo};
  div:first-child {
    height: 275px;
    background: center url(${(p: o) => p.t ? 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' : 'https://images.pexels.com/photos/3206114/pexels-photo-3206114.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'});
  }
  div:nth-child(2) {
    padding: 30px 20px;
  }
  h3 {
    margin: 0;
    text-transform: uppercase;
  }
  p {
    font-size: ${p => p.theme.fontSize.small};
    margin: 10px 0 20px 0;
  }
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 200px 1fr;
    div:first-child {
      height: 100%;
    }
  }
`

export const Report = styled.div`
  border: 1px solid;
  border-radius: 3px;
  overflow: hidden;
  padding: 20px;
  margin: 50px 0 0 0;
  div {
    display: grid;
    grid-template-columns: 1fr 1px 1fr;
    column-gap: 20px;
    margin-bottom: 40px;
  }
  p.title {
    font-size: ${p => p.theme.fontSize.xlarge};
    font-weight: 700;
    text-transform: uppercase;
  }
  hr {
    background: ${p => p.theme.charlie};
    height: 100%!important;
    width: 100%;
  }
  p.desc {
    font-size: ${p => p.theme.fontSize.small};
  }
  @media ${device.tablet} {
    max-width: 650px;
    margin: 70px auto 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      margin: 0 50px 0 0;
      grid-template-columns: 125px 1px 200px;
    }
  }
`