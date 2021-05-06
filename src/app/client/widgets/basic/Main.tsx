import styled from 'styled-components'
import { Navigator } from 'app/global/smart'
import { mediaQ, controls } from 'utils/constants/media-queries'

interface p {
  children: any;
  withNav?: boolean;
  hideNavigator?: boolean;
  whiteNavigatorText?: boolean;
  customNavPaths?: string[];
}

export default (p: p) => {
  const { children, withNav, hideNavigator, whiteNavigatorText, customNavPaths, ...r } = p
  return (
    <Main {...r} hide={hideNavigator}>
      {!hideNavigator && <div className="navigator"><Navigator whiteText={whiteNavigatorText} customPaths={customNavPaths} /></div>}
      { withNav ? <Nav>{children}</Nav> : children}
    </Main>
  )
}

interface m {
  hide?: boolean;
}

const Main = styled.main`
  padding: ${(p:m) => p.hide ? '75px 20px 100px 20px' : '0 20px 100px 20px'};
  div.navigator {
    padding: 25px 0 50px 0;
  }
  @media ${mediaQ.tablet} { 
    max-width: ${controls.maxDesktopWidth};
    margin: 0 auto;
  }
  @media ${mediaQ.laptopL} {
    padding: ${(p:m) => p.hide ? '75px 0 100px 0' : '0 0 100px 0'};
  }
`

const Nav = styled.div`

`