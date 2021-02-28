import styled from 'styled-components'
import { device } from '../../../../../../../utils/constants/mediaQueries'

interface m {
  bg: string;
  theme: any;
}

export const Section = styled.div`
  border-bottom: 2px solid ${p => p.theme.sBravo};
  padding: 30px 0;
  grid-template: 'media''content';
  row-gap: 10px;
  &.m-revert div.m-content {
    text-align: right;
    a {
      margin: 0 0 0 auto;
    }
  }
  &, div.m-content {
    display: grid;
    row-gap: 10px;
  }
  p.title {
    font-size: ${p => p.theme.fontSize.jumbo};
    font-weight: 700;
  }
  div.m-content {
    grid-area: content;
  }
  div.m-media {
    grid-area: media;
    height: 125px;
    div {
      width: 100%;
      height: 100%;
      background: url(${(p:m) => p.bg});
      background-repeat: no-repeat;
      background-position: center;
    }
  }
  @media ${device.tablet} { 
    grid-template: unset;
    row-gap: unset;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 40px;
    padding: 40px 0;
    height: calc(250px - 80px);
    div.m-content, div.m-media {
      grid-area: unset;
      width: 100%;
      height: 100%;
    }
    a {
      height: calc(45px - 20px);
      margin: auto 0 0 0;
    }
    &.m-revert {
      div.m-content {
        text-align: left;
        a {
          margin: auto 0 0 0;
        }
      }
      div.m-media {
        grid-area: media-l;
      }
      grid-template: 'media-l content';
      
    }
  }
`