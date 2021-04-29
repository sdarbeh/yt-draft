import { LoadingSpinner } from 'app/global/loaders'
import React from 'react'
import styled from 'styled-components'
interface props {
    text: string;
    loading?: boolean;
    disabled?: boolean;
}

export default ({ text, loading, disabled, ...rest }: props) => (
  <FormButton
    disabled={loading || disabled}
    {...rest}
  >
    { loading ?
      <LoadingSpinner size={25}/>
      :
      <span>{text}</span>
    }
 </FormButton>
)

export const FormButton = styled.button`
  background-color: ${props => props.theme.primary};
  font-size: ${props => props.theme.fontSize.small};
  width: 100%;
  height: 40px;
  border-radius: 3px;
`