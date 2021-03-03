import styled from 'styled-components'
import { device } from '../../../../../utils/constants/mediaQueries'

export const Container = styled.div`
    border: 1px solid ${p => p.theme.primary};
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 4px 2px 30px -10px ${p => p.theme.sBravo};
    form {
        padding: 20px;
    }
`

export const Heading = styled.div`
    background: ${p => p.theme.primary};
    padding: 20px;
`

export const FormContent = styled.div`
  margin: 30px 0 0 0;
  display: grid;
  row-gap: 20px;
  @media ${device.tablet} { 
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
  }
`

export const Grid = styled.div`
   display: grid;
   row-gap: 20px;
   @media ${device.tablet} { 
    row-gap: 10px;
   }
`

export const ButtonContainer = styled.div`
    button {
        width: 150px;
        margin: 30px 0 0 auto; 
    }
`