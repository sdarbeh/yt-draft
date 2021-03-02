import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'
import { PageHero } from '../../../widgets/basic'
import { Link as L } from 'react-router-dom'

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

export const MainContent = styled.div`
  display: grid;
  grid-template: 'content''links';
  row-gap: 75px;
  @media ${device.tablet} {
    row-gap: unset;
    grid-template: 'links content';
    grid-template-columns: 300px 1fr;
    column-gap: 75px;
  }
  div.nf-body {
    grid-area: content;
  }
`

export const PopularLinks = styled.div`
  grid-area: links;
  border-top: 1px solid ${p => p.theme.bravo};
  padding-top: 75px;
  p, a {
    width: max-content;
  }
  p.np-title {
    font-size: ${p => p.theme.fontSize.xlarge};
    text-transform: uppercase;
    font-weight: 700;
  }
  div.np-content {
    margin-top: 10px;
    div {
      padding: 5px 0;
    }
  }
  p.np-ct {
    font-size: ${p => p.theme.fontSize.large};
    color: ${p => p.theme.primary};
    padding-left: 15px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  a {
    padding-left: 35px;
    display: block;
    margin-bottom: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${device.tablet} {
    border-top: unset;
    padding-top: unset;
    border-right: 1px solid ${p => p.theme.bravo};
    padding-right: 20px;
  }
`

export const Page = styled.div`
  font-size: ${p => p.theme.fontSize.large};
  span {
    font-weight: 700;
  }
  p.n-title {
    font-size: ${p => p.theme.fontSize.xlarge};
    text-transform: uppercase;
    margin-bottom: 5px;
  }
  div.n-content {
    margin: 40px 0 0 0;
  }
  p.n-search {
    margin-bottom: 25px;
    @media ${device.tablet} {
      margin-bottom: 50px;
    }
  }
`

export const Prediction = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  a {
    font-size: ${p => p.theme.fontSize.xlarge};
    color: ${p => p.theme.primary};
    text-decoration: underline;
    text-transform: capitalize;
    font-weight: 700;
  }
`