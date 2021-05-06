import styled from 'styled-components'
import { Main as M } from '../../widgets/basic'
import { Link as L } from 'react-router-dom'
import { mediaQ } from 'utils/constants/media-queries'

export const Main = styled(M)`
  p {
    max-width: 800px;
  }
  .resource-content {
    display: grid;
    row-gap: 30px;
    grid-template: 'resource' 'main';
    @media ${mediaQ.tablet} {
      row-gap: unset;
      grid-template: 'resource main';
      grid-template-columns: 200px 1fr;
      column-gap: 30px;
    }
  }
`

export const Section = styled.div`
  grid-area: main;
  border-bottom: 1px solid ${p => p.theme.bravo};
  p.title {
    font-size: ${p => p.theme.font.jumbo};
    font-weight: 700;
  } 
  div.sec-content {
    margin: 10px 0;
    display: grid;
    row-gap: 10px;
  }
  div.sec-team {
    margin: 20px 0;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  div.sec-team-card {
    &:first-child {
      margin-left: unset;
    }
    &:last-child {
      margin-right: unset;
    }
    margin: 10px;
  }
`

export const Link = styled(L)`
  background: ${p => p.theme.primary};
  padding: 10px 20px;
  width: max-content;
`