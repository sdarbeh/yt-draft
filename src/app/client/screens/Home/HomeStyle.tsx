import { Main as M } from 'app/client/widgets/basic'
import { homeAssets } from 'assets/public'
import styled from 'styled-components'
import { mediaQ } from 'utils/constants/media-queries'
import { getTimeOfDay } from 'utils/helpers/date'

const hero = () => {
  const time = getTimeOfDay()
  switch (time) {
    case 'morning':
      return homeAssets.hero_day
    case 'evening':
      return homeAssets.hero_evening
    case 'night':
      return homeAssets.hero_night
  }
}

export const HomeHero = styled.div`
  background:
  linear-gradient(
  rgba(0, 0, 0, 0.3), 
  rgba(0, 0, 0, 0.3)
  ),
  url(${hero()});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100%;
  height: calc(100vh - 120px); // 60px header
  text-transform: uppercase;
  position: relative;
  &, div.hero-logo, div.hero-l {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  div.hero-logo, div.hero-l {
    position: absolute;
    left: 0;
    width: 100%;
  }
  div.hero-logo {
    top: 0;
    height: 100px;
  }
  div.hero-c {
    background: ${p => p.theme.sBravo};
    padding: 20px;
    border-radius: 3px;
  }
  h1 {
    margin: 0 0 20px 0;
  }
  a {
    background: ${p => p.theme.primary};
    color: ${p => p.theme.globalColors.black};
    padding: 5px 14px;
    border-radius: 1px;
  }
  div.hero-l {
    bottom: 0;
    height: max-content;
    div {
      height: 50px;
    }
    svg {
      width: 30px;
      height: 30px;
    }
    span, div {
      opacity: .5
    }
  }
  @media ${mediaQ.tablet} { 
    background-size: 100%;
    height: calc(100vh - 180px); // 60px header
  }
`

export const Main = styled(M)`
  display: grid;
  row-gap: 100px;
  h3 {
    text-align: center;
  }
  @media ${mediaQ.tablet} { 
    row-gap: 150px;
  }
`