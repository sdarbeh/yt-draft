import { useState } from 'react'
import styled from 'styled-components'
import { eyeIcon, eyeHiddenIcon } from 'assets/icons/widgets'
// items
import { Input } from '.'
import { InputBase } from './types'
import { checkLength, containSpecialChar, hasNumber } from 'utils/validators'

interface P extends InputBase {
  hideCriteria?: boolean;
}

const Password = ({ name, hideCriteria, value, ...r }: P) => {
  const [visible, setVisible] = useState(false)
  const showCriteria = (!hideCriteria && value) ? true : false

  const criterias = [
    {
      name: '6 to 16 characters',
      value: value!,
      validator: (str: string) => checkLength(str, 6, 16)
    },
    {
      name: 'Include at least one number',
      value: value!,
      validator: (str: string) => hasNumber(str)
    },
    {
      name: 'Include at least one special character',
      value: value!,
      validator: (str: string) => containSpecialChar(str)
    },
  ]

  return (
    <Container visible={visible}>
      <Input
        type={visible ? 'text' : 'password'}
        element={'input'}
        name={name}
        value={value}
        criterias={showCriteria ? criterias : undefined}
        options={{
          minLength: 6,
          maxLength: 16,
          autoComplete: 'password'
        }}
        {...r}
      />
      <button
        onClick={() => setVisible(prev => !prev)}
        type='button'
        className='password-toggle'
      >{visible ? eyeIcon : eyeHiddenIcon}</button>
    </Container>
  )
}

export default Password

interface c {
  visible: boolean;
}

const Container = styled.div`
  position: relative;
  input {
    padding: 2px 37px 5px 7px;
    width: calc(100% - 44px);
  }
  .password-toggle {
    position: absolute;
    right: 7px;
    top: 0;
    padding-top: ${({ theme }) => theme.icon.normal};
    height: ${({ theme }) => `calc((${theme.icon.xlarge} - 7px) + ${theme.icon.normal})`};
    width: 20px;
    svg {
      width: 100%;
      height: 100%;
      opacity: ${(p: c) => p.visible ? .7 : .1};
    }
  }
`

