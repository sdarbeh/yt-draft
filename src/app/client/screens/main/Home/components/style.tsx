import styled from "styled-components";

interface h {
  bg: string;
  theme: any;
}

export const Card = styled.div`
  background:
  linear-gradient(
  rgba(0, 0, 0, 0.4), 
  rgba(0, 0, 0, 0.4)
  ),
  url(${(p: h) => p.bg});
  font-size: ${p => p.theme.fontSize.xlarge};
  box-shadow: ${p => p.theme.btnShadow};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`