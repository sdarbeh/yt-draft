import styled from "styled-components";
import { device } from "../../../../../../../utils/constants/mediaQueries";

export const Container = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  row-gap: 40px;
  grid-template: 'calculator''results';
  @media ${device.tablet} { 
    row-gap: unset;
    grid-template: 'calculator results';
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`

export const Calc = styled.div`
  grid-area: calculator;
  height: max-content;
  div.calc-c-t {
    margin-bottom: 30px;
    width: 100%;
    h1 {
      font-size: ${p => p.theme.fontSize.jumbo};
      margin: 0;
      font-weight: 600;
    }
  }
  form {
    width: 100%;
    display: grid;
    row-gap: 20px;
  }
  input {
    font-size: ${p => p.theme.fontSize.large};
  }
  div.calc-btns {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button.calc-reset {
      color: ${p => p.theme.medium};
    }
    button {
      text-transform: uppercase;
      font-weight: 600;
    }
    div {
      width: 150px;
    }
  }
  @media ${device.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`

export const Results = styled.div`
  border-top: 2px solid ${p => p.theme.bravo};
  grid-area: results;
  padding-top: 40px;
  div.no-results {
    flex-direction: column;
    p {
      font-size: ${p => p.theme.fontSize.xlarge};
      font-weight: 600;
      margin-bottom: 5px;
    }
    span {
      text-align: center;
    }
    div.calc-icon {
      color: ${p => p.theme.bravo};
      border: 2px solid;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-top: 30px;
    }
    svg {
      width: 50%;
      height: 50%;
    }
  }
  @media ${device.tablet} {
    border-top: unset;
    padding-top: unset;
    border-left: 1px solid ${p => p.theme.sBravo};
    padding-left: 30px;
  }
`