import styled from 'styled-components'
import { Main as M } from '../../../widgets/basic'

export const Main = styled(M)`
  div.legal-content {
    display: grid;
    row-gap: 20px;
  }
  a.legal-s-t {
    color: ${p => p.theme.primary};
    font-size: ${p => p.theme.fontSize.jumbo};
    font-weight: 700;
  }
  p.legal-s-d{
    font-size: ${p => p.theme.fontSize.large};
    margin-top: 5px;
  }
`