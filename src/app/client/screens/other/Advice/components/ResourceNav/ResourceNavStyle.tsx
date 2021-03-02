import styled from 'styled-components'
import { device } from '../../../../../../../utils/constants/mediaQueries'

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
    padding-right: 30px;
    border-right: 1px solid ${p => p.theme.bravo};
  }
`