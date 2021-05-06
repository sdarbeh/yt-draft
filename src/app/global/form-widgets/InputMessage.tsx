import { errorIcon, warningIcon } from "assets/icons/widgets"
import styled from "styled-components"
import { InputMessage as IM } from './types'

const InputMessage = ({ type, message }: IM) => {

  const Icon = () => {
    switch (type) {
      case 'error':
        return errorIcon
      case 'warning':
        return warningIcon
    }
    return null
  }

  const Container = ({ children }: any) => {
    switch (type) {
      case 'error':
        return <Error>{children}</Error>
      case 'warning':
        return <Warning>{children}</Warning>
      default:
        return <Normal>{children}</Normal>
    }
  }

  return (
    <Container>
      <Icon />
      <span>{message}</span>
    </Container>
  )
}

export default InputMessage

const Normal = styled.div`
  font-size: ${p => p.theme.font.small};
`

const WithIcon = styled(Normal)`
  display: grid;
  grid-template-columns: ${p => `${p.theme.icon.xsmall} 1fr`};
  column-gap: ${p => `calc(${p.theme.icon.xsmall} - 6px)`};
  svg {
    width: 100%;
    height: 100%;
  }
`

const Error = styled(WithIcon)`
  color: ${p => p.theme.globalColors.error};
`

const Warning = styled(WithIcon)`
  color: ${p => p.theme.globalColors.warn};
`