import styled from "styled-components";
import { device } from "../../../../../../utils/constants/mediaQueries";

interface h {
  bg: string;
  theme: any;
}

export const Card = styled.div`
  color: ${p => p.theme.globalColors.white};
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: 700;
  div {
    transition: all .3s;
    text-align: center;
  }
  span {
    text-shadow: 2px 2px 3px rgb(0 0 0 / 23%);
  }
  @media ${device.tablet} {
    font-size: ${p => p.theme.fontSize.jumbo};
  }
`