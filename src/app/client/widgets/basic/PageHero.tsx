import styled from 'styled-components'
import { mediaQ, controls } from 'utils/constants/media-queries'

interface p {
  bg: string;
  children: any;
  title?: string;
  border?: boolean;
  withNav?: boolean;
}

export default (p: p) => {
  let { bg, children, title, border, withNav, ...rest } = p

  if (withNav) {
    border = true
  }
  return (
    <Hero
      bg={bg}
      border={border}
      withNav={withNav}
      {...rest}
    >
      <div className='content'>
        {title && <h1>{title}</h1>}
        {withNav ? <div className="hero-nav">{children}</div> : children}
      </div>
    </Hero>
  )
}

interface h {
  bg: string;
  theme: any;
  border?: any;
  withNav?: any;
}

export const Hero = styled.div`
  color: ${p => p.theme.globalColors.white};
  border-bottom: 5px solid ${(p: h) => p.border ? p.theme.primary : p.theme.alpha};
  background:
  linear-gradient(
  rgba(0, 0, 0, 0.3), 
  rgba(0, 0, 0, 0.3)
  ),
  url(${(p: h) => p.bg});
  background-repeat: no-repeat;
  background-position: center;
  align-items: center;
  justify-content: center;
  height: calc(300px - 5px);
  &, div.content {
    display: flex;
  }
  // with naviagtion
  div.content {
    padding: ${(p:h) => p.withNav ? '40px 20px 0 20px' : null};
    height: ${(p:h) => p.withNav ? 'calc(100% - 40px)' : null};
    width: ${(p:h) => p.withNav ? 'calc(100% - 40px)' : null};
    align-items: ${(p:h) => p.withNav ? 'flex-end' : null};
    flex-direction: ${(p:h) => p.withNav ? 'column' : null};
  }
  div.hero-nav {
    height: 35px;
    width: 100%;
    margin: auto 0 5px 0;
    display: flex;
    text-transform: uppercase;
    a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 5px solid transparent;
      margin-right: 5px;
      border-radius: 2px 2px 0 0;
      div {
        margin-bottom: -5px;
      }
    }
    a:hover {
      border-color: ${p => p.theme.primary};
    }
    a.active {
      box-shadow: 0px -12px 30px -10px ${p => p.theme.sBravo};
      background: ${p => p.theme.primary};
      color: ${p => p.theme.globalColors.black};
    }
  }
  // end with naviagtion
  h1 {
    font-size: ${p => p.theme.font.xxjumbo};
    line-height: 50px;
    text-transform: uppercase;
    text-shadow: 2px 2px 3px rgb(0 0 0 / 23%);
    margin: ${(p:h) => p.withNav ? 'auto auto -25px 0!important' : null}
  }
  p, h1 {
    margin: 0;
  }
  @media ${mediaQ.tablet} { 
    background-size: 100%;
    div.content {
      max-width: ${controls.maxDesktopWidth};
    }
    div.hero-nav {
      max-width: 400px;
      margin: auto auto 5px 0;
    }
  }
`