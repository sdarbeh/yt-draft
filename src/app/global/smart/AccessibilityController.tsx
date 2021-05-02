import { CenteredDiv } from 'app/global/basic'
import { accessibiltyIcon } from 'assets/icons/widgets'
import { useAccessibilltyModal } from 'hooks'
import React from 'react'
import styled from 'styled-components'

interface p {
  fixedIcon?: boolean;
  afterOpen?: any;
  className?: any
}

export default ({ fixedIcon, afterOpen, ...r }: p) => {
  const { setAccessibilityModal } = useAccessibilltyModal()
  const click = () => {
    setAccessibilityModal(true)
    if (afterOpen) {
      afterOpen()
    }
  }

  if (fixedIcon) return (
    <Icon {...r}>
      <button onClick={click}>{accessibiltyIcon}</button>
    </Icon>
  )

  return (
    <button {...r} onClick={click}>
      <CenteredDiv>{accessibiltyIcon}</CenteredDiv>
      <span>Accessibility</span>
    </button>
  )
}

export const Icon = styled.div`
    display: unset;
    position: fixed;
    right: 20px;
    bottom: 20px;
    button {
        background-color: ${p => p.theme.primary};
        box-shadow: ${p => p.theme.btnShadow};
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
    svg {
        width: 60%;
        height: 60%;
    }
`