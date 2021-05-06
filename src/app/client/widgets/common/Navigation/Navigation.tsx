import React, { useState } from 'react';
import styled from 'styled-components'
import { useMediaQuery } from '@material-ui/core';

// items
import { Mobile, Desktop } from './components'
import { xIcon, hamburgerMenuIcon } from 'assets/icons/widgets';
import { mediaQ } from 'utils/constants/media-queries';

export default () => {
  const matches = useMediaQuery(mediaQ.tablet),
    [navActive, setNavActive] = useState(false),
    handleToggle = () => setNavActive((prev: boolean) => !prev)

  return (
    !matches ?
      <>
        <Hamburger onClick={handleToggle} aria-label={'Navigation'} className={!navActive ? 'nav-inactive' : ''}>
          {navActive ? <CloseIcon>{xIcon}</CloseIcon> : hamburgerMenuIcon}
        </Hamburger>
        {navActive && (
          <Mobile handleClose={handleToggle} />
        )}
      </>
      :
      <Desktop />
  )
}

const CloseIcon = styled.div`
  color: ${props => props.theme.primary};
  svg {
    transform: scale(.7);
    left: 0;
    top: 0; 
  }
`

const Hamburger = styled.button`
  height: 100%;
  width: 40px;
  height: 40px;
  position: relative;
  &.nav-inactive {
    opacity: .3;
  }
  & svg {
    position: absolute;
    height: 40px;
    width: 40px;
  }
`