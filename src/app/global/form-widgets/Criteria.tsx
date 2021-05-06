import { circleCheckIcon, circleCheckFilledIcon } from "assets/icons/widgets"
import styled from "styled-components"
import { Criteria as C } from "./types"

const Criteria = ({ name, value, validator }: C) => {
  const valid = validator(value)
  
  return (
    <Container valid={valid}>
      <span>{valid ? circleCheckFilledIcon : circleCheckIcon}</span>
      <span>{name}</span>
    </Container>
  )
}

export default Criteria

interface c {
  valid: any;
  theme: any;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: ${p => `calc(${p.theme.icon.small} - 6px) 1fr`};
  column-gap: ${p => `calc(${p.theme.icon.xsmall} - 6px)`};
  font-size: ${p => p.theme.font.small};
  opacity: ${(p: c) => p.valid ? 1 : .5};
  color: ${(p: c) => p.valid ? p.theme.globalColors.success : p.theme.charlie};
  span:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`