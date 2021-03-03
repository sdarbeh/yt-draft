import styled from 'styled-components'
import { device, } from '../../../../../../../utils/constants/mediaQueries'
import { PageHero } from '../../../../../widgets/basic'

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

export const Content = styled.div`
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: 400px 1fr;
    column-gap: 40px;
  }
`

export const Heading = styled.div`
  margin-bottom: 50px;
  h2 {
    font-size: ${p => p.theme.fontSize.jumbo};
    margin: 0 0 15px 0;
  }
  p {
    margin: 0 0 10px 0;
  }
`