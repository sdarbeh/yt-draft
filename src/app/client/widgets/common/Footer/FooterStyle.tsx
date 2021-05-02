import styled from 'styled-components'
import { device } from 'utils/constants/mediaQueries'

export const Container = styled.footer`
  background: ${p => p.theme.sBravo};
  padding: 100px 50px 20px 50px;
  width: calc(100% - 100px);
  div.f-content {
    margin-bottom: 50px;
    @media ${device.tablet} {
      max-width: max-content;
      display: grid;
      grid-template-columns: 250px 1fr;
      column-gap: 100px;
      margin: 0 auto 50px auto;
    }
  }
  div.legal {
    text-align: center;
    span {
      font-size: ${p => p.theme.fontSize.jumbo};
      color: ${p => p.theme.primary};
      width: 100%;
      display: block;
      font-weight: 700;
    }
    p {
      color: ${p => p.theme.medium};
      font-size: ${p => p.theme.fontSize.xsmall};
      margin-top: 10px;
    }
  }
`

export const Sidebar = styled.div`
  background: ${p => p.theme.primary};
  padding: 30px;
  margin: 0 auto;
  border-radius: 2px;
  overflow: hidden;
  a {
    width: max-content;
    font-weight: 600;
  }
  div.f-p {
    display: grid;
    grid-template-columns: 15px 1fr;
    column-gap: 10px;
  }
  div.f-links {
    margin-top: 30px;
    display: grid;
    row-gap: 20px;
  }
  svg {
    width: 15px;
    height: 15px;
  }
  @media ${device.tablet} {
    margin: 0;
    height: max-content;
  }
`

export const Main = styled.div`
  margin-top: 50px;
  p, a {
    width: max-content;
  }
  p.fl-t {
    font-size: ${p => p.theme.fontSize.large};
    color: ${p => p.theme.primary};
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div.flm {
    margin-bottom: 20px;
    div {
      display: grid;
      row-gap: 12px;
    }
  }
  a {
    padding-left: 25px;
    display: block;
    position: relative;
    &::before {
      background: ${p => p.theme.primary};
      content: "";
      position: absolute;
      left: 10px;
      top: 10px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
    &:hover {
      text-decoration: underline;
    }
  }
  @media ${device.tablet} {
    max-width: max-content;
    margin-top: unset;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    row-gap: 40px;
  }
`