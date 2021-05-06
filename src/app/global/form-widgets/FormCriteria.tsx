import { useState, useEffect } from 'react'
import styled, { keyframes } from "styled-components"
import { Criteria } from "."
import { FormCriteria as FC } from "./types"

const FormCriteria = ({ criterias, inputValue, parent }: FC) => {
  const [active, setActive] = useState(false)
  const [parentHeight, setParentHeight] = useState(100)

  useEffect(() => {
    if (inputValue.length >= 3) {
      setActive(true)
    }
  }, [inputValue])
  
  useEffect(() => {
    const parentContainer = parent.current
    
    if (parentContainer) {
      setParentHeight(parentContainer.clientHeight)
      handleOutsideClick()
    }

    return () =>handleOutsideClick()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parent])

  const handleOutsideClick = () => {
    window.addEventListener('click', (e) => {
      let paths = e.composedPath()
      paths.slice(0, 3)
      
      setActive(paths.includes(parent.current!))
    })
  }

  if (!active) return null

  return (
    <Container className='form-criteria' height={parentHeight}>
      {criterias.map((c, i) => (
        <Criteria {...c} key={i} />
      ))}
    </Container>
  )
}

export default FormCriteria

const slide = () => keyframes`
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`

interface c {
  height: number
}

const Container = styled.div`
  position: absolute;
  bottom: ${(p:c) => `calc(${p.height}px + 15px)`};
  z-index: ${p => p.theme.zindex.ss};
  display: grid;
  padding: 15px;
  border-radius: 3px;
  row-gap: ${p => `calc(${p.theme.icon.xsmall} - 5px)`};
  background-color: ${p => p.theme.alpha};
  animation: ${slide} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  box-shadow: ${p => p.theme.btnShadow};
`