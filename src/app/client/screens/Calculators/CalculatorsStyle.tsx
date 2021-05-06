import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'

export const Container = styled.div`
  background: ${p => p.theme.bravo};
  min-height: calc(100vh - 60px);
  div.calc-content {
    background: ${p => p.theme.alpha};
    border-radius: 10px;
  }
  div.calc-nav {
    font-size: ${p => p.theme.font.small};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: max-content;
    a {
      border-bottom: 4px solid transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(50px - 8px);
    }
    a.active {
      background: ${p => p.theme.bravo};
      border-color: ${p => p.theme.primary};
      color: unset;
      font-weight: 700;
    }
    span {
      display: none;
    }
  }
  div.calc-calc {
    padding: 30px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .calc-f-min {
    width: 135px;
  }
  .calc-f-med {
    width: max-content;
  }
  div.calc-legal {
    font-size: ${p => p.theme.font.xsmall};
    opacity: .5;
    margin: 40px 0 0 0;
    font-style: italic;
    max-width: 450px;
  }
  @media ${mediaQ.tablet} { 
    div.calc-content {
      display: grid;
      grid-template-columns: 250px 1fr;
    }
    div.calc-nav {
      grid-template-columns: unset;
      column-gap: unset;
      grid-template-rows: repeat(4, 1fr);
      span {
        display: unset;
      }
      a {
        height: calc(60px - 8px);
      }
    }
    div.calc-calc {
      padding: 20px 30px 30px 30px;
    }
    div.calc-legal {
      margin: 20px 0 0 auto;
    }
  }
`

