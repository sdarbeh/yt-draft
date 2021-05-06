import { PageHero } from "app/client/widgets/basic";
import styled from "styled-components";
import { mediaQ } from "utils/constants/media-queries";

export const Hero = styled(PageHero)`
  div.content {
    padding: 40px 20px;
    width: calc(100% - 40px);
    height: calc(100% - 80px);
    align-items: flex-end;
    @media ${mediaQ.tablet} {
      padding: 40px 0;
    }
  }
`