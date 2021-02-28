import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'
import { PageHero, Main as M } from '../../../widgets/basic'

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

export const Main = styled(M)`
  div.sitemap-content {
    display: grid;
    row-gap: 30px;
  }
  a {
    width: max-content;
  }
  a:hover {
    text-decoration: underline;
  }
  div.sm-s {
    p {
      color: ${p => p.theme.primary};
      font-size: ${p => p.theme.fontSize.xlarge};
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 15px;
    }
    div {
      display: grid;
      row-gap: 10px;
    }
  }
  div.sitemap-a-indent {
    padding-left: 15px;
  }
  @media ${device.tablet} {
    div.sitemap-content {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 50px;
    }
  }
`