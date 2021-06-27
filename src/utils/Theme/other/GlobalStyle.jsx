import { createGlobalStyle } from "styled-components";

// global css styling
const Global = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.alpha};
    color: ${(props) => props.theme.charlie};
    font-size: ${props => props.theme.font.normal};
  }
  ::-webkit-scrollbar-track { 
    background-color: ${(props) => props.theme.alpha};
  }
  ::-webkit-scrollbar-thumb { 
    background: ${(props) => props.theme.primary};
  }
  ::selection { 
    background: ${(props) => props.theme.primary}
  }
  a.active {
    color: ${props => props.theme.primary};
    font-weight: 700;
  }
  li:before {
    border: 2px solid ${p => p.theme.primary};
  }
`;

export default Global