import styled from 'styled-components'
import { Main as M } from '../../widgets/basic'
import { Link as L } from 'react-router-dom'

export const Main = styled(M)`
  p {
    max-width: 800px;
  }
`

export const Section = styled.div`
  border-bottom: 1px solid ${p => p.theme.bravo};
  padding: 20px 0;
  display: grid;
  grid-template-rows: 20px 1fr;
  row-gap: 30px;
  div.title {
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
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
    grid-gap: 10px;
  }
`

export const Contact = styled.div`
  margin: 30px 0;
  &, div.about-c-c {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  p.about-c-t {
    font-size: ${p => p.theme.font.jumbo};
    font-weight: 700;
  }
  div.about-c-c {
    margin: 10px 0;
    p {
      font-size: ${p => p.theme.font.large};
      margin-bottom: 20px;
    }
  }
`

export const Link = styled(L)`
  background: ${p => p.theme.primary};
  padding: 10px 20px;
  width: max-content;
  border-radius: 2px;
  overflow: hidden;
`