import styled from 'styled-components'
import { Main as M } from '../../widgets/basic'

export const Main = styled(M)`
  div.legal-content {
    display: grid;
    row-gap: 20px;
  }
  a.legal-s-t {
    color: ${p => p.theme.primary};
    font-size: ${p => p.theme.font.jumbo};
    font-weight: 700;
  }
  p.legal-s-d{
    font-size: ${p => p.theme.font.large};
    margin-top: 5px;
  }
`

export const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, deserunt ex reprehenderit possimus qui laboriosam incidunt sed quisquam ipsa ut alias enim nesciunt sequi dolor dolorem culpa exercitationem. Eius, sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, deserunt ex reprehenderit possimus qui laboriosam incidunt sed quisquam ipsa ut alias enim nesciunt sequi dolor dolorem culpa exercitationem. Eius, sapiente? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, deserunt ex reprehenderit possimus qui laboriosam incidunt sed quisquam ipsa ut alias enim nesciunt sequi dolor dolorem culpa exercitationem. Eius, sapiente?'

export const Container = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  row-gap: 30px;
  h2 {
    font-size: ${p => p.theme.font.jumbo};
    margin: 0;
  }
  span, a {
    color: ${p => p.theme.primary};
    font-weight: 700;
  }
  div.legal-content {
    display: grid;
    row-gap: 10px;
  }
`